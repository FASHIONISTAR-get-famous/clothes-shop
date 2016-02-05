describe('the home page', function(){

  var itemList = element.all(by.repeater('item in clothesCtrl.clothesList'));
  var cartItems = element.all(by.repeater('item in clothesCtrl.cart'));
  var addToBasket = element(by.id('addToBasket'));

  function getData(type) {
    return element.all(by.repeater('item in clothesCtrl.clothesList').column('item.' + type)).then(function(item){
      return item[0].getText();
    });
  }

  beforeEach(function(){
    browser.get('http://localhost:8080');
    browser.waitForAngular();
  });

  it('has a title', function(){
    expect(browser.getTitle()).toEqual('Clothes Shop');
  });

  it('should display the total amount of items', function(){
    expect(itemList.count()).toBe(13);
  });

  it('should display the correct product name', function(){
    expect(getData('name')).toEqual('Almond Toe Court Shoes, Black');
  });

  it('should display the correct product price', function(){
    expect(getData('price')).toEqual('Price: £99.00');
  });

  it('has a list of items', function(){
    element(by.repeater('item in clothesCtrl.clothesList').row(1).column('name'));
  });
});
