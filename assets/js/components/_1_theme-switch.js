(function() {
  var themeSwitch = document.getElementById('switch-light-dark');
  if(themeSwitch) {
    var htmlElement = document.getElementsByTagName("html")[0],
      darkInput = themeSwitch.querySelector('input[value="dark"]');
    initTheme();
    
    themeSwitch.addEventListener('change', function(event){
      resetTheme(event.target.value);
    });

    function initTheme() {
      if(htmlElement.getAttribute('data-theme') == 'dark') {
        darkInput.checked = true;
      }
    };

    function resetTheme(theme) {
      if(theme == 'dark') {
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('themeSwitch', 'dark');
      } else {
        htmlElement.removeAttribute('data-theme');
        localStorage.setItem('themeSwitch', 'light');
      }
    };
  }
}());