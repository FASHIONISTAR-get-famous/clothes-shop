describe('clothesShopController', function(){

  var ctrl;
  var cart = [];
  var $httpBackend;
  var scope;

    item = {
      "category": "Women's Footwear",
      "name": "Almond Toe Court Shoes, Black",
      "price": 99.00,
      "quantity": 5,
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
  console.log(item);
  scope = $rootScope.$new();
  ctrl = $controller('mainController', {
    $scope: scope
  });
}));

it('should show a list of item', function(){
  console.log('ciao', ctrl.list);
  expect(ctrl.list).toBe(true);

});

it('can add an item in the cart', function(){
  ctrl.addItem(item);
  expect(ctrl.cart[0].name).toBe('Almond Toe Court Shoes, Black');
  expect(ctrl.cart[0].price).toBe(99.00);
});

it('return false if the item is already in the cart', function() {
  ctrl.addItem(item);
  expect(ctrl.isNotInCart(item)).toEqual(false);
});

it('can not add an item out of order', function(){
  ctrl.addItem(item3);
  expect(ctrl.cart).not.toContain(item3);
});

it('can see how many items has added', function(){
  ctrl.addItem(item);
  ctrl.addItem(item2);
  expect(ctrl.countQuantity()).toBe(2);
});

describe('#discounts', function(){
  beforeEach(function(){
    ctrl.addItem(item);
    ctrl.addItem(item2);
  });

  it('can get the total amount before apply the discount', function(){
    expect(ctrl.sum()).toBe(266);
  });

  it('can receive 5£ discount if has a correct voucher', function(){
    ctrl.checkDiscount();
    expect(ctrl.sum()).toBe(266);
    expect(ctrl.afterDisc()).toBe(44);
  });

  it('can receive 10£ discount for order over 50£ and correct voucher', function(){
    expect(ctrl.checkDiscount()).toBe(10);
  });

  it('can apply 10£ discount to the total for order below 75£ and correct voucher', function(){
    ctrl.checkDiscount();
    expect(ctrl.afterDisc()).toBe(49);
  });

  it("can apply 15£ discount to the total for order over 75£ and at least one footwear item", function(){
    //ctrl.checkDiscount();
    expect(ctrl.sum()).toBe(266);
    //expect(ctrl.afterDisc()).toBe(84);
  });

  it('can not get 15£ discount if at least one item is footwear', function(){
    ctrl.addItem(item5);
    //ctrl.checkDiscount();
    //expect(ctrl.afterDisc()).toBe(79);
  });
});
});

