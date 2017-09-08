app.controller('ReviewController',function(){
  this.review = {};

  this.addReview= function(product){
    this.review.onCreated = new Date();
    product.reviews.push(this.review);
    this.review = {};
  }
});
