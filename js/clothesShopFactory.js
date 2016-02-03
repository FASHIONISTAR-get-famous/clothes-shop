clothesShop.factory('clothesShopFactory', ['$http', function($http){


    return {
      query: function() {
        return $http ({
          url: "test/mock/clothes.json",
          methed: 'GET',
        });
      }
    };




  //var clothesFactory = {
    //return {
      //clothes: function(){
        //return $http(
          //{
            //url: "test/mock/clothes.json",
            //method: "GET",
        //});
        ////.then(function(response) {
          ////return response.data;
          ////});
        //}
      //};
      ////console.log(clothesShopFactory);
      ////return clothesFactory;

    }]);

