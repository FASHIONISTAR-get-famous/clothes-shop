describe('clothesShopController', function(){

  var ctrl;
  var cart = [];
  var $httpBackend;
  var scope;

  item = {
    "category": "Women's Footwear",
    "name": "Almond Toe Court Shoes, Black",
    "price": 99.00,
    "quantity": 9,
    "image": "img/almondToeCourtShoes.jpg"
  };

  item2 = {
    "category": "Women's Casualwear",
    "name": "Gold Button Cardigan, Black",
    "price": 167.00,
    "quantity": 6,
    "image": "img/goldButtonCardiganBlue.jpg"
  };

  item3 = {
    "category": "Women's Casualwear",
    "name": "Cotton Shorts, Medium Red",
    "price": 30.00,
    "quantity": 0,
    "image": "img/cottonShortsRed.png"
  };

  beforeEach(function(){
    jasmine.addMatchers({
      toEqualData: function(util, customEqualityTesters) {
        return {
          compare: function(actual, expected) {
          return { pass: angular.equals(actual, expected)  };
        }
      };
    }
  });
});

beforeEach(module('clothesShop'));

beforeEach(inject(function($rootScope, $controller, _$httpBackend_) {
  $httpBackend = _$httpBackend_;
  $httpBackend.expectGET('test/mock/clothes.json').respond([item]);
  scope = $rootScope.$new();
  ctrl = $controller('mainController', {
    $scope: scope
  });
}));

it('should show a list of item', function(){
  expect(ctrl.list).toBe(true);

});

it('should add an item in the cart', function(){
  ctrl.addItem(item);
  expect(ctrl.cart[0].name).toBe('Almond Toe Court Shoes, Black');
  expect(ctrl.cart[0].price).toBe(99.00);
});

it('should update the quantity selected for the same item', function(){
  ctrl.addItem(item);
  ctrl.addItem(item);
  expect(ctrl.cart[0].quantity).toBe(2);
});

it('should reduce the quantity in stock when the user select an item', function(){
  ctrl.addItem(item2);
  expect(item2.quantity).toBe(5);
});

it('return false if the item is already in the cart', function() {
  ctrl.addItem(item);
  expect(ctrl.isNotInCart(item)).toEqual(false);
});

it('should not add an item out of order', function(){
  ctrl.addItem(item3);
  expect(ctrl.cart).not.toContain(item3);
});

it('should see how many items has added', function(){
  ctrl.addItem(item);
  ctrl.addItem(item2);
  expect(ctrl.countQuantity()).toBe(2);
});

describe('#discounts', function(){
  beforeEach(function(){

    item4 = {
      "category": "Men's Footwear",
      "name": "Flip Flops, Blue",
      "price": 19.00,
      "quantity": 3,
      "image": "img/flipFlopsBlue.png"
    };

    item5 = {
      "category": "Women's Casualwear",
      "name": "Gold Button Cardigan, Black",
      "price": 39.00,
      "quantity": 6,
      "image": "img/goldButtonCardiganBlue.jpg"
    };

    ctrl.addItem(item5);
  });

  it('should get the total amount before apply the discount', function(){
    expect(ctrl.sum()).toBe(39.00);
  });

  it('should receive 5£ discount if has a correct voucher', function(){
    spyOn(ctrl, 'isFootwear').and.returnValue(true);
    ctrl.checkDiscount();
    expect(ctrl.sum()).toBe(39);
    expect(ctrl.discount).toBe(5.00);
    expect(ctrl.afterDisc()).toBe(34.00);
  });

  it('should receive 10£ discount for order over 50£ and correct voucher', function(){
    spyOn(ctrl, 'isFootwear').and.returnValue(true);
    ctrl.addItem(item4);
    ctrl.checkDiscount();
    expect(ctrl.sum()).toBe(58.00);
    expect(ctrl.discount).toBe(10.00);
    expect(ctrl.afterDisc()).toBe(48.00);
  });

  it("should apply 15£ discount to the total for order over 75£ and at least one footwear item", function(){
    spyOn(ctrl, 'isFootwear').and.returnValue(true);
    ctrl.addItem(item);
    ctrl.checkDiscount();
    expect(ctrl.sum()).toBe(138.00);
    expect(ctrl.afterDisc()).toBe(123.00);
  });

  it('should not get 15£ discount if at least one item is footwear', function(){
    spyOn(ctrl, 'isFootwear').and.returnValue(false);
    ctrl.addItem(item5);
    ctrl.addItem(item5);
    ctrl.checkDiscount();
    expect(ctrl.sum()).toBe(117.00);
    expect(ctrl.afterDisc()).toBe(107.00);
  });
});
});

