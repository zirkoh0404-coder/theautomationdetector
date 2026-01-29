function detect_patchright() {
  try {
    if (typeof window === 'undefined' || typeof navigator === 'undefined') return false;

    if (window.__pwInitScripts || window.__patchright__ || window.patchright_injected) return true;

    var _els = document.querySelectorAll('script, div, span');
    for (var i = 0; i < _els.length; i++) {
        var _id = _els[i].id || '';
        if (_id.indexOf('__pw_') === 0) return true;
    }

    if (navigator.plugins.toString().indexOf('[native code]') === -1) return true;
    if (typeof window.Buffer !== 'undefined' || typeof window.process !== 'undefined') return true;

    var _pd = Object.getOwnPropertyDescriptor(navigator, 'webdriver');
    if (_pd && !_pd.get && _pd.value === false) return true;

  } catch (e) {}
  return false;
}
if (typeof window !== 'undefined') window.detect_patchright = detect_patchright;