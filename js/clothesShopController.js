clothesShop.controller('clothesShopController', ["clothesShopFactory", function(clothesShopFactory) {

  var self = this;
  self.cart = [];
  self.outOfOrder = false;
  self.list = true;
  self.newTot = 0;

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
      self.outOfOrder = true;
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
    return tot;
  };

  self.discount = function(){
    var tot = self.sum();
    var discount = 0;
    if (tot > 75 && self.isMenCategory()) {
      discount = 15;
    } else if (tot > 50) {
      discount = 10;
    }
    return discount;
  };

  self.isMenCategory = function(){
    for (var i = 0; i < self.cart.length; i++) {
      if(self.cart[i].category === "Men's Footwear") {
        return true;
      }
    }
    return false;
  };

  self.afterDisc = function(){
    var sum = self.sum();
    var discount = self.discount();
    var total = sum - discount;
    return total;
  };

  self.isVoucherCorrect = function(){
    var codes = ['womenwear', 'casual', 'footwear'];
    var prova = new RegExp(self.voucher);
    if (prova.test(codes) === true) {
      voucher = 5;
      self.okVoucher = true;
      self.wrongVoucher = false;
    } else {
      voucher = 0;
      self.wrongVoucher = true;
      self.okVoucher = false;
    }
    self.totAfterVoucher(voucher);
  };

  self.totAfterVoucher = function(voucher){
    var total = self.afterDisc();
    self.finalTot = true;
    self.newTot = total - voucher;
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

  //self.notAvailable = function(){
    //self.outOfOrder = !self.outOfOrder;
  /*};*/
}]);

