/** Caminho do arquivo de estado persistido no servidor. */
export const STATE_FILE = '.image-slots.state.json';

/** Dimensão máxima (px) para redimensionamento da imagem antes de salvar. */
export const MAX_DIM = 1200;

/**
 * Formatos raster aceitos para drop/upload.
 * SVG excluído (pode conter scripts).
 * GIF excluído (canvas re-encode descarta animação).
 */
export const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

/** Fator de escala máximo no modo de reencuadramento. */
export const S_MAX = 5;

/**
 * Limita o valor de escala entre 1 e S_MAX.
 * @param {number} s - Valor de escala
 * @returns {number}
 */
export const clampS = (s) => Math.max(1, Math.min(S_MAX, s));
