describe('Item', function() {

  beforeEach(module('clothesShop'));

    it('checks for the existence of the Item factory', inject(function(Item) {
          expect(Item).toBeDefined();
        }));

});
