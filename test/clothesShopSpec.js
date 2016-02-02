describe('clothesShopController', function(){
  beforeEach(module('clothesShop'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('clothesShopController');
    ctrl.cart = [];
  }));

  it('initializa with an empty cart', function(){
    expect(ctrl.cart.length).toBe(0);
  });
});
