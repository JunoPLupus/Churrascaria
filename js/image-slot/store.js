import { STATE_FILE } from './constantes.js';

/** @type {Set<Function>} Callbacks notificados a cada mudança de estado. */
export const subs = new Set();

let slots = {};
const tombstones = new Set();
let loaded = false;
let loadP = null;

/**
 * Carrega o estado persistido do servidor via fetch e faz merge com
 * alterações locais que possam ter ocorrido antes da resposta chegar.
 * @returns {Promise<void>}
 */
export function load() {
  if (loadP) return loadP;
  loadP = fetch(STATE_FILE)
    .then((r) => (r.ok ? r.json() : null))
    .then((j) => {
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    })
    .catch(() => {})
    .then(() => { loaded = true; subs.forEach((fn) => fn()); });
  return loadP;
}

let saving = false;
let saveDirty = false;

/**
 * Serializa e persiste o estado atual via window.omelette.writeFile.
 * Escritas concorrentes são serializadas: a segunda aguarda a primeira
 * e re-dispara com o estado mais recente ao concluir.
 */
export function save() {
  if (saving) { saveDirty = true; return; }
  const w = window.omelette && window.omelette.writeFile;
  if (!w) return;
  saving = true;
  Promise.resolve(w(STATE_FILE, JSON.stringify(slots)))
    .catch(() => {})
    .then(() => { saving = false; if (saveDirty) { saveDirty = false; save(); } });
}

/**
 * Retorna os dados de um slot pelo ID, normalizando o formato legado
 * (string data-URL pura → objeto {u, s, x, y}).
 * @param {string} id - Identificador do slot
 * @returns {{ u: string, s: number, x: number, y: number } | null}
 */
export function getSlot(id) {
  const v = slots[id];
  if (!v) return null;
  return typeof v === 'string' ? { u: v, s: 1, x: 0, y: 0 } : v;
}

/**
 * Atualiza ou remove os dados de um slot e notifica todos os subscribers.
 * Inicia o carregamento inicial do sidecar se ainda não tiver ocorrido.
 * @param {string} id - Identificador do slot
 * @param {{ u: string, s: number, x: number, y: number } | null} val - Dados ou null para remover
 */
export function setSlot(id, val) {
  if (!id) return;
  if (val) { slots[id] = val; tombstones.delete(id); }
  else { delete slots[id]; if (!loaded) tombstones.add(id); }
  subs.forEach((fn) => fn());
  if (loaded) save(); else load().then(save);
}
