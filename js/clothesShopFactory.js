clothesShop.factory('clothesShopFactory', ['$http', function($http){

  var clothesShopFactory = {
    clothes: function(){
      return $http(
        {
          url: "test/mock/clothes.json",
          method: "GET",
      })
      .then(function(response) {
        console.log(response.data);
        return response.data;
      });
    }
  };
  console.log(clothesShopFactory);
  return clothesShopFactory;

}]);

