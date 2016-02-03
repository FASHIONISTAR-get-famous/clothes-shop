clothesShop.factory('clothesShopFactory', ['$http', function($http){


    return {
      clothes: function() {
        return $http ({
          url: "test/mock/clothes.json",
          methed: 'GET',
        });
      }
    };
    }]);

