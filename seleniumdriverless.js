function detect_selenium_driverless() {
  try {
    var _w = window;
    if (_w.cdc_adoQpoasnfa76pfcZLmcfl_Array || _w.__selenium_driverless__) return true;
    
    var _d = Object.getOwnPropertyDescriptor(navigator, 'webdriver');
    if (_d && _d.get && _d.get.toString().includes('return true')) {
        if (!_w.__pw_internal && !Object.getOwnPropertyNames(_w).join('').includes('__nd_')) return true;
    }
  } catch (e) {}
  return false;
}
window.detect_selenium_driverless = detect_selenium_driverless;
