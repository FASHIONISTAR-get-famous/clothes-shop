clothesShop.controller('clothesShopController', ["clothesShopFactory", function(clothesShopFactory) {

  var self = this;
  self.total = 0;
  self.cart = [];
  self.totCheckOut = 0;
  self.checkout = false;
  self.list = true;

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

  self.sum = function(){
    var tot = 0;
    for (var i = 0; i < self.cart.length; i++) {
      tot += (self.cart[i].price * self.cart[i].quantity);
    }
    console.log(tot);
    return tot;
  };

  self.checkVoucher = function(){

    var codes = ['hellohe', 'ciao', 'foot'];
    var prova = new RegExp(self.voucher);
    if (prova.test(codes) === true) {
      return true;
    } else {
      return false;
    }
  };

  self.discount = function(){
    var newTot = self.sum();
    if (newTot > 75 && self.checkCategory() === true) {
      newTot -= 15;
    } else if (newTot > 50) {
      newTot -= 10;
    } else {
      return newTot;
    }
    return newTot;
  };

  self.checkCategory = function(){
    for (var i = 0; i < self.cart.length; i++) {
      if(self.cart[i].category === "Men's Footwear") {
        return true;
      }
      return false;
    }
  };

  self.toCart = function(){
    self.checkout = !self.checkout;
    self.list = !self.list;
  };
}]);

