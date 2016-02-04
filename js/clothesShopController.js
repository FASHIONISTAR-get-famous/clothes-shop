clothesShop.controller('clothesShopController', ["clothesShopFactory", function(clothesShopFactory) {

  var self = this;
  self.total = 0;
  self.cart = [];
  self.totCheckOut = 0;
  self.checkout = false;
  self.outOfOrder = false;
  self.list = true;

  var data = clothesShopFactory.clothes()
  .then(function(response) {
    self.searchResult = response.data;
    console.log('selfresult', self.searchResult);
  });

  self.addItem = function(item){
    var quantity = item.quantity;
    item = {
      name: item.name,
      price: item.price,
      quantity: 1,
      category: item.category,
      image: item.image
    };

    if (quantity <= 0) {
      self.notAvailable();
    } else if (self.isInCart(item)) {
      self.cart.push(item);
      self.outOfOrder = false;
    }
  };

  self.isInCart = function(item) {
    for(var i = 0; i < self.cart.length; i++) {
      if (item.name === self.cart[i].name) {
        return false;
      }
    }
    return true;
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

  self.countItems = function(){
    var totItems = 0;
    for(var i = 0; i < self.cart.length; i++) {
      totItems +=  self.cart[i].quantity;
    }
    return totItems;
  };

  self.toCart = function(){
    self.checkout = !self.checkout;
    self.list = !self.list;
  };

  self.notAvailable = function(){
    self.outOfOrder = !self.outOfOrder;
  };
}]);

