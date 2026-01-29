function detect_patchright() {
  try {
    var _w = window;
    var keys = Object.getOwnPropertyNames(_w);
    for (var i = 0; i < keys.length; i++) {
      if (keys[i].startsWith('__pw_') || keys[i].startsWith('__playwright_')) return true;
    }
    
    var _e = new Error();
    if (_e.stack && (_e.stack.includes('__pw') || _e.stack.includes('patchright'))) return true;
  } catch (e) {}
  return false;
}
window.detect_patchright = detect_patchright;
