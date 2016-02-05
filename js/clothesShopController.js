clothesShop.controller('clothesShopController', ["clothesShopFactory", function(clothesShopFactory) {

  var self = this;
  self.cart = [];
  self.discount = 0;
  self.outOfOrder = false;
  self.list = true;
  self.voucherCodes = ['womenwear', 'casual', 'footwear'];

  var data = clothesShopFactory.clothes()
  .then(function(response) {
    self.clothesList = response.data;
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

    if (quantity === 0) {
      self.outOfOrder = true;
    } else if (self.isNotInCart(item)) {
      self.cart.push(item);
      self.outOfOrder = false;
    }
  };

  self.isNotInCart = function(item) {
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
    return tot;
  };

  self.isFootwear = function(){
    for (var i = 0; i < self.cart.length; i++) {
      var category = self.cart[i].category;
      if(category === "Men's Footwear" || category === "Women's Footwear") {
        return true;
      }
    }
  };

  self.isVoucherCorrect = function(){
    var prova = new RegExp(self.voucher);
    if (prova.test(self.voucherCodes) === true) {
      self.showOkVoucher();
      return true;
    } else {
      self.showWrongVoucher();
      return false;
    }
  };

  self.showOkVoucher = function(){
    self.okVoucher = true;
    self.wrongVoucher = false;
  };

  self.showWrongVoucher = function(){
    self.okVoucher = false;
    self.wrongVoucher = true;
  };

  self.checkDiscount = function(){
    var tot = self.sum();
    if(self.isVoucherCorrect()) {
      if (tot > 75 && self.isFootwear()) {
        self.discount = 15;
      } else if (tot > 50) {
        self.discount = 10;
      } else {
        self.discount = 5;
      }
    }
    self.afterVoucher = true;
    return self.discount;
  };

  self.afterDisc = function(){
    var sum = self.sum();
    var total = sum - self.discount;
    return total;
  };

  self.countQuantity = function(){
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
}]);

