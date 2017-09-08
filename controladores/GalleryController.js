
app.controller('GalleryController', function(){
  this.current = 0;
  this.setCurrent = function(newGallery){
    this.current = newGallery || 0;
  };
});
