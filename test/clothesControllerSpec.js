describe('clothesShopController', function(){
  beforeEach(module('clothesShop'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('clothesShopController');
  }));

  beforeEach(function(){
    item = {
      name: 'mattia',
      price: 3,
      quantity: 3,
      category: "men"
    };
  });

  it('has an object', function(){
    ctrl.create(item);
    expect(ctrl.mattia[0].name).toBe('mattia');
  });

  //var httpBackend;
  //beforeEach(inject(function($httpBackend) {
    //httpBackend = $httpBackend;
    //httpBackend
    //.when("GET", "test/mock/clothes.json")
    //.respond(
      //{ items: items  }
    //);

  /*}));*/
});
