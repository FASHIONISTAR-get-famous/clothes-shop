clothesShop.controller('clothesShopController', ["clothesShopFactory", function(clothesShopFactory) {

  var self = this;

  self.mattia = [];

  var data = clothesShopFactory.clothes()
  .then(function(response) {
    self.searchResult = response.data;
    console.log('selfresult', self.searchResult);
  });

  self.create = function(item){

    box = {
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      category: item.category
    };

    self.mattia.push(box);
  };
}]);

