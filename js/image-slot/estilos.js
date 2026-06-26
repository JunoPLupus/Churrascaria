/** CSS injetado no Shadow DOM do componente image-slot. */
export const stylesheet =
  ':host{display:inline-block;position:relative;vertical-align:top;' +
  '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' +
  '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' +
  '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' +
  '  cursor:grab;touch-action:none}' +
  ':host([data-panning]) .spill{cursor:grabbing}' +
  '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' +
  '  pointer-events:none;-webkit-user-drag:none;user-select:none;' +
  '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' +
  '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' +
  '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' +
  '  transform:translate(-50%,-50%)}' +
  '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' +
  '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' +
  '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' +
  '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' +
  ':host([data-reframe]){z-index:10}' +
  ':host([data-reframe]) .spill{display:block}' +
  ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' +
  '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' +
  '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' +
  '  cursor:pointer;user-select:none}' +
  '.empty svg{opacity:.45}' +
  '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' +
  '.empty .sub{font-size:11px}' +
  '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' +
  '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' +
  ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' +
  '  background:rgba(201,100,66,.10)}' +
  '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' +
  '  transition:border-color .12s}' +
  ':host([data-over]) .ring{border-color:#c96442}' +
  ':host([data-filled]) .ring{display:none}' +
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' +
  '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' +
  '  white-space:nowrap}' +
  ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' +
  '  {opacity:1;pointer-events:auto}' +
  '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' +
  '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' +
  '  backdrop-filter:blur(6px)}' +
  '.ctl button:hover{background:rgba(0,0,0,.8)}' +
  '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' +
  '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';

/** Ícone SVG exibido no estado vazio do slot. */
export const icon =
  '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
  'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
  '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' +
  '<path d="m21 15-5-5L5 21"/></svg>';
