app.directive('productReview', function(){
  return {
    restrict: 'E',
    templateUrl: 'templates/product-review.html',
    controller: 'ReviewController',
    controllerAs: 'reviewCtrl'
  };
});
