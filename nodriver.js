function detect_nodriver() {
  try {
    if (typeof window === 'undefined' || typeof navigator === 'undefined') return false;

    var _w = window;
    var _n = navigator;

    var _d = Object.getOwnPropertyDescriptor(_n, 'webdriver');
    if (_d && _d.get) {
        var _s = _d.get.toString();
        if (_s.indexOf('native code') === -1 || _s.length > 35) return true;
    }

    if (_w.chrome && _w.chrome.runtime) {
        if (!_w.chrome.app && !_w.chrome.csi) return true;
    }

    if (_w.nodriver_internal_function !== undefined || _w.__nodriver !== undefined) return true;

    if (_n.constructor.name !== 'Navigator') return true;

    var _e = new Error();
    if (_e.stack) {
        var _st = _e.stack;
        if (_st.indexOf('chrome-extension://') !== -1 || _st.indexOf('nodriver') !== -1) return true;
        var _l = _st.split('\n');
        if (_l.length > 13) return true;
    }

    var _p = Object.getOwnPropertyNames(_w);
    for (var i = 0; i < _p.length; i++) {
        var _k = _p[i];
        if (_k.indexOf('__nodriver') !== -1 || _k.indexOf('_nd_') === 0) return true;
    }

  } catch (e) {}
  return false;
}
if (typeof window !== 'undefined') window.detect_nodriver = detect_nodriver;
