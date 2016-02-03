describe('clothesShopController', function(){
  beforeEach(module('clothesShop'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('clothesShopController');
  }));

  beforeEach(function(){
    item = {
      name: 'jeans',
      price: 30,
      quantity: 2,
      category: "men"
    };
  });

  it('has an object', function(){
    ctrl.addItem(item);
    expect(ctrl.cart[0].name).toBe('jeans');
  });

  it('can modify the quantity of items', function(){
    ctrl.create(item);
    ctrl.changeQuantity(1);
    expect(ctrl.cart[0].quantity).toBe(1);
  });

});

