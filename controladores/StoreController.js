
app.controller('StoreController', ['$http',function($http){
  var store = this;

  store.products = [];

  $http.get('/../product.json').then(function(response){
    store.products = response.data;
  });

}]);
