function detect_seleniumdriverless() {
  try {
    if (typeof window === 'undefined' || typeof navigator === 'undefined') return false;

    var _d = document;
    var _w = window;
    
    for (var k in _d) {
      if (k.indexOf('cdc_') > -1 || k.indexOf('$cdc_') > -1) return true;
    }

    if (_w.selenium_driverless_context_manager || _w.__selenium_driverless__) return true;

    var _desc = Object.getOwnPropertyDescriptor(navigator, 'webdriver');
    if (_desc && _desc.get) {
      var _s = _desc.get.toString();
      if (_s.indexOf('native code') === -1 || _s.length > 35) return true;
    }

    if (_w.__selenium_evaluate || _w.__selenium_unwrapped) return true;

    var _o = Object.getOwnPropertyNames(_w);
    for (var i = 0; i < _o.length; i++) {
      if (_o[i].indexOf('driverless') > -1 && _o[i].indexOf('_') === 0) return true;
    }

  } catch (e) {}
  return false;
}
if (typeof window !== 'undefined') window.detect_seleniumdriverless = detect_seleniumdriverless;