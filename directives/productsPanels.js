app.directive('productPanels', function(){
  return {
    restrict: 'E',
    templateUrl: 'templates/product-panels.html',
    controller: 'PanelController',
    controllerAs: 'panel'
  };
});
