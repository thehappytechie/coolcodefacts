(function() {
  var searchInput = document.getElementById('main-search-input');
  if(!searchInput) return;
  // focus on search using '/' shortcut
  window.addEventListener('keydown', function(event){
    if( event.key && event.key.toLowerCase() == '/' ) {
      event.preventDefault();
      searchInput.focus();
    }
  });
}());