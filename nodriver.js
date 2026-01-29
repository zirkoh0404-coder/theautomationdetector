function detect_nodriver() {
  try {
    if (typeof window === 'undefined' || typeof navigator === 'undefined') return false;

    var _d = Object.getOwnPropertyDescriptor(navigator, 'webdriver');
    if (_d && (_d.get || _d.set)) return true;

    var _e = new Error();
    if (_e.stack) {
        var _l = _e.stack.split('\n');
        if (_l.length > 13 || _e.stack.indexOf('chrome-extension://') !== -1) return true;
    }

    var _p = Object.getOwnPropertyNames(window);
    for (var i = 0; i < _p.length; i++) {
        var k = _p[i];
        if (k.indexOf('__nodriver') !== -1 || k.indexOf('_nd_') === 0) return true;
    }

    if (Function.prototype.toString.toString().indexOf('[native code]') === -1) return true;
    if (window.chrome && window.chrome.runtime && !window.chrome.app) return true;

  } catch (e) {}
  return false;
}
if (typeof window !== 'undefined') window.detect_nodriver = detect_nodriver;