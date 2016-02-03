clothesShop.factory('clothesShopFactory', ['$http', function($http){


    return {
      query: function() {
        return $http ({
          url: "test/mock/clothes.json",
          methed: 'GET',
        });
      }
    };
    }]);

