(function() {
  var autocomplete = document.getElementsByClassName('js-autocomplete');
  if(autocomplete.length == 0) return;

  // static array of values - used as demo list of search results
  var searchValues = [
    {label: 'Inspector', category: 'Interface', url: 'basic-page.html'},
    {label: 'Timeline', category: 'Interface', url: 'basic-page.html'},
    {label: 'Comments', category: 'Syntax', url: 'basic-page.html'},
    {label: 'Structure', category: 'Syntax', url: 'basic-page.html'},
    {label: 'How invoicing works', category: 'Invoicing > Customers', url: 'basic-page.html'},
    {label: 'Taxes', category: 'Invoicing > Customers', url: 'basic-page.html'},
  ];

  // default values - visible when user has not started typing yet
  var defaultValues = [
    {label: 'Timeline', category: 'Interface', url: 'basic-page.html'},
    {label: 'Taxes', category: 'Testing > Customers', url: 'basic-page.html'},
  ];

  new Autocomplete({
    element: autocomplete[0],
    characters: 0,
    searchData: function(query, cb) {
      // This is the function used to retrieve search results. 
      // It is a demo function - you should replace it with your custom code.
      var data = defaultValues;
      if(query.length > 1) {
        data = searchValues.filter(function(item){
          return item['label'].toLowerCase().indexOf(query.toLowerCase()) > -1 || item['category'].toLowerCase().indexOf(query.toLowerCase()) > -1;
        });
      }
      // NOTE: make sure to call the callback function and pass the data array as its argument 👇
      cb(data);
    }
  });
  
}());