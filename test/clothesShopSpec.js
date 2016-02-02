describe('clothesShopController', function(){
  beforeEach(module('clothesShop'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('clothesShopController');
  }));

  it('initialises with an epmty create', function(){
    expect(ctrl.test).toBeUndefined();
  });

  var httpBackend;
  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend;
    httpBackend
    .when("GET", "test/mock/clothes.json")
    .respond(
      { items: items  }
    );

  }));
});
