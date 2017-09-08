app.directive('productGallery', function(){
  return {
    restrict: 'E',
    templateUrl: 'templates/product-gallery.html',
    controller: 'GalleryController',
    controllerAs: 'gallery'
  };
});
