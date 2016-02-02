clothesShop.controller('clothesShopController', ["$scope", "clothesShopFactory", function($scope, clothesShopFactory) {

  var promise = clothesShopFactory.clothes();

  promise.then(function(data) {
    $scope.clothes = data;
    console.log(data);
  });

}]);

