import { MAX_DIM } from './constantes.js';

/**
 * Redimensiona um arquivo de imagem e retorna uma data URL em formato WebP.
 *
 * O lado maior é limitado a 2× a largura renderizada do slot (retina-sharp)
 * e ao máximo de MAX_DIM. WebP com qualidade 0.85 mantém alpha e é ~10×
 * menor que PNG em fotos.
 *
 * @param {File} file - Arquivo de imagem a processar
 * @param {number} targetW - Largura atual do slot em pixels
 * @returns {Promise<string>} Data URL da imagem redimensionada em WebP
 */
export async function toDataUrl(file, targetW) {
  const bitmap = await createImageBitmap(file);
  try {
    const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
    const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
    const w = Math.max(1, Math.round(bitmap.width * scale));
    const h = Math.max(1, Math.round(bitmap.height * scale));
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
    return canvas.toDataURL('image/webp', 0.85);
  } finally {
    bitmap.close && bitmap.close();
  }
}
