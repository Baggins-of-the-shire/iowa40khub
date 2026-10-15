// Runs before first paint (blocking, external so the CSP needs no inline script).
// Applies the visitor's saved theme; ignores anything not in the known list.
(function () {
  var known = document.documentElement.getAttribute('data-themes');
  var list = known ? known.split(',') : [];
  try {
    var saved = window.localStorage.getItem('hub-theme');
    if (saved && list.indexOf(saved) !== -1) document.documentElement.setAttribute('data-theme', saved);
  } catch (e) { /* storage blocked: keep the default theme */ }
})();
