clothesShop.controller('clothesShopController', ["clothesShopFactory", function(thesShopFactory) {

  var self = this;
  self.total = 0;

  self.cart = [];

  var data = clothesShopFactory.clothes()
  .then(function(response) {
    self.searchResult = response.data;
    console.log('selfresult', self.searchResult);
  });

  self.addItem = function(item){

    item = {
      name: item.name,
      price: item.price,
      quantity: 1,
      category: item.category
    };

    self.cart.push(item);
  };

  this.sum = function(){
    var tot = 0;
    for (var i = 0; i < self.cart.length; i++) {
       tot += (this.cart[i].price * this.cart[i].quantity);
     }
     console.log(tot);
     return tot;
  };
}]);

