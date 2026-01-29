function detect_selenium_driverless() {
  try {
    if (typeof window === 'undefined') return false;
    var _w = window;
    var _n = navigator;

    if (_w.selenium_driverless_context_manager || _w.__selenium_driverless__ || _w.cdc_adoQpoasnfa76pfcZLmcfl_Array) return true;

    if (_n.webdriver && !/Headless/.test(_n.userAgent)) {
        var _d = Object.getOwnPropertyDescriptor(_n, 'webdriver');
        if (_d && (_d.value === true || _d.writable === true)) return true;
    }

    if (_n.constructor.name !== 'Navigator') return true;

    if (_w.chrome && _w.chrome.runtime && !_w.chrome.csi) return true;

    try {
        null.f();
    } catch (e) {
        if (e.stack && (e.stack.indexOf('selenium') !== -1 || e.stack.indexOf('driverless') !== -1)) return true;
    }

    var _p = Object.getOwnPropertyNames(_w);
    for (var i = 0; i < _p.length; i++) {
        var _k = _p[i].toLowerCase();
        if (_k.indexOf('selenium') !== -1 || _k.indexOf('driverless') !== -1) return true;
    }

  } catch (e) {}
  return false;
}
if (typeof window !== 'undefined') window.detect_selenium_driverless = detect_selenium_driverless;
