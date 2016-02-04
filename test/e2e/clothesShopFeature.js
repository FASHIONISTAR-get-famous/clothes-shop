describe('the home page', function(){

  beforeEach(function(){
    browser.get('http://localhost:8080');
  });

  it('has a title', function(){
    expect(browser.getTitle()).toEqual('Clothes Shop');
  });

  it('has a list of items', function(){
    element(by.repeater('item in clothesCtrl.clothesList').row(1).column('name'));
  });
});
