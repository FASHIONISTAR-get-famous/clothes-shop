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
      price: 30,
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
    beforeEach(function(){
      item4 = {
        name: 'jumper',
        price: 40,
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
      expect(ctrl.sum()).toBe(54);
    });

    it('can receive 10£ discount for order over 50£', function(){
      ctrl.addItem(item);
      ctrl.addItem(item2);
      expect(ctrl.sum()).toBe(54);
      expect(ctrl.discount()).toBe(10);
    });

    it('can apply 10£ discount to the total for order below 75£', function(){
      expect(ctrl.afterDisc()).toBe(44);
    });

    it("can receive 15£ discount for order over 75£ and if they have got at least one Men's footwear item", function(){
      ctrl.addItem(item4);
      expect(ctrl.sum()).toBe(94);
      expect(ctrl.discount()).toBe(15);
    });

    it("can apply 15£ discount to the total for order over 75£ and one Men's footwear item", function(){
      ctrl.addItem(item4);
      expect(ctrl.afterDisc()).toBe(79);
    });

    it("can not receive 15£ discount for order over 75£ if at least one item is not Men's footwear", function(){
      ctrl.addItem(item5);
      expect(ctrl.sum()).toBe(94);
      expect(ctrl.isMenCategory()).toBe(false);
      expect(ctrl.afterDisc()).toBe(84);
    });

    it('can receive additional 5£ discount if has a correct voucher', function(){
      ctrl.addItem(item4);
      expect(ctrl.totAfterVoucher(5)).toBe(74);
    });
  });
});

