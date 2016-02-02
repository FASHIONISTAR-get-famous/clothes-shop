clothesShop.controller('clothesShopController', ["$http", "$scope", "clothesShopFactory", function($http, $scope, clothesShopFactory) {


  var mattia = [];
  var promise = clothesShopFactory.clothes();

  promise.then(function(data) {
    $scope.clothes = data;
  });

/*  $scope.select = function(item) {*/
    //$scope.selected = item;
  //};
  /*$scope.selected = {};*/

  this.create = function(item){

    box = {
      name: item.name,
      price: item.price,
      quantity: item.quantity
    };

    mattia.push(box);
    console.log('mattia', mattia);
  };
}]);

//var test;
//$scope.tests = $http.get('test/mock/clothes.json');
//$scope.tests.then(function(response) {
  //$scope.test = response.data;
  ////$scope.test = data;
  //console.log('second data', $scope.test);
  //});


