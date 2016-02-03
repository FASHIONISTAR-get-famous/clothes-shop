clothesShop.controller('clothesShopController', ["clothesShopFactory", function(clothesShopFactory) {

  var self = this;

  self.mattia = [];

  var data = clothesShopFactory.query()
  .then(function(response) {
    self.searchResult = response.data;
    console.log('selfresult', self.searchResult);
  });

  self.create = function(item){

    box = {
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      category: item.category
    };

    self.mattia.push(box);
  };
}]);

//var test;
//$scope.tests = $http.get('test/mock/clothes.json');
//$scope.tests.then(function(response) {
  //$scope.test = response.data;
  ////$scope.test = data;
  //console.log('second data', $scope.test);
  //});

  //var test = clothesShopFactory.query();
  //console.log('test', test);
  //self.doSearch = function() {
    //
    //var promise = getData();

    //var getData = function(){
      //clothesShopFactory.clothes()
      //.then(function(response) {
        //this.myData = response.data;
        //});
        ////return this.data;
        /*};*/

        //promise.then(function(data) {
          //$scope.clothes = data;
          //});


