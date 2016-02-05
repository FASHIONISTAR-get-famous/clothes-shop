describe('clothesShopController', function(){
  beforeEach(module('clothesShop'));

  var ctrl;
  var cart = [];

  beforeEach(inject(function($controller) {
    ctrl = $controller('clothesShopController');
  }));

  beforeEach(function(){
    item = {
      name: 'jeans',
      price: 25,
      quantity: 1,
      category: "men",
      image: ''
    };

    item2 = {
      name: 'polo',
      price: 24,
      quantity: 4,
      category: "men",
      image: ''
    };

    item3 = {
      name: 't-shirt',
      price: 20,
      quantity: 0,
      category: 'men'
    };

  });

  it('should show a list of item', function(){
    expect(ctrl.list).toBe(true);
  });

  it('can add an item in the cart', function(){
    ctrl.addItem(item);
    expect(ctrl.cart[0].name).toBe('jeans');
    expect(ctrl.cart).toContain(item);
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
    var voucher;
    beforeEach(function(){
      item4 = {
        name: 'jumper',
        price: 10,
        quantity: 1,
        category: "Men's Footwear",
        image: ''
      };

      item5 = {
        name: 'tie',
        price: 40,
        quantity: 1,
        category: "men sport",
        image: ''
      };
      ctrl.addItem(item);
      ctrl.addItem(item2);
    });

    it('can get the total amount before apply the discount', function(){
      expect(ctrl.sum()).toBe(49);
    });

    it('can receive 5£ discount if has a correct voucher', function(){
      ctrl.checkDiscount();
      expect(ctrl.sum()).toBe(49);
      expect(ctrl.afterDisc()).toBe(44);
    });

    it('can receive 10£ discount for order over 50£ and correct voucher', function(){
      ctrl.addItem(item4);
      expect(ctrl.checkDiscount()).toBe(10);
    });

    it('can apply 10£ discount to the total for order below 75£ and correct voucher', function(){
      ctrl.addItem(item4);
      ctrl.checkDiscount();
      expect(ctrl.afterDisc()).toBe(49);
    });

    it("can receive 15£ discount for order over 75£ and if get at least one footwear item and correct voucher", function(){
      ctrl.addItem(item4);
      ctrl.addItem(item5);
      expect(ctrl.checkDiscount()).toBe(15);
    });

    it("can apply 15£ discount to the total for order over 75£ and at least one footwear item", function(){
      ctrl.addItem(item4);
      ctrl.addItem(item5);
      ctrl.checkDiscount();
      expect(ctrl.sum()).toBe(99);
      expect(ctrl.afterDisc()).toBe(84);
    });

    it('can not get 15£ discount if at least one item is footwear', function(){
      ctrl.addItem(item5);
      ctrl.checkDiscount();
      expect(ctrl.afterDisc()).toBe(79);
    });
  });
});

