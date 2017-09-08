
app.controller('PanelController', function(){
  this.tab = 1;
  this.selectTab = function(tab){
    this.tab = tab;
  };
  this.isSelected = function(tab){
    return tab === this.tab;
  };
});
