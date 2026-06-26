import { ImageSlot } from './ImageSlot.js';

if (!customElements.get('image-slot')) {
  customElements.define('image-slot', ImageSlot);
}
