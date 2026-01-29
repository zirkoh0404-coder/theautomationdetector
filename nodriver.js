function detect_nodriver() {
  try {
    var _w = window;
    var keys = Object.getOwnPropertyNames(_w);
    if (keys.includes('__nd_evaluate') || keys.includes('_nd_fn') || _w.__nodriver) return true;
    
    if (navigator.constructor.name !== 'Navigator') {
        var _e = new Error();
        if (_e.stack && _e.stack.includes('nodriver')) return true;
    }
  } catch (e) {}
  return false;
}
window.detect_nodriver = detect_nodriver;
