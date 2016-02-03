describe('factory: Search', function() {

  var search;

  beforeEach(module('clothesShop')); //nome dell'app la quale puo avere molti controllers

  beforeEach(inject(function(Search) {
    search = Search;

  }));

  var items = [
    {
      "login": "tansaku",
      "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
      "html_url": "https://github.com/tansaku"

    },
    {
      "login": "stephenlloyd",
      "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
      "html_url": "https://github.com/stephenlloyd"

    }

    ];

    var httpBackend;
    var backendHelper = function($httpBackend) {
      httpBackend = $httpBackend;
      httpBackend
      .expectGET("test/mock/clothes.json")
      .respond(
        { items: items  }
      );
    };


  //beforeEach(inject(backendHelper)); // inject the dummy item dall'testHelper

  it('responds to query', function(){
    expect(search.query).toBeDefined();

  });

  it('returns search results', function() {
    search.query('hello')
    .then(function(response) {
      expect(response.data.items).toEqual(items);

    });
    httpBackend.flush();

  });

});



//describe('clothesFactory: getClothes', function() {

  //var getClothes;

  //beforeEach(module('clothesShop'));

  //beforeEach(inject(function(clothesFactory) {
    //getClothes = clothesFactory;
  //}));


   //it('responde to query', function(){
      //getClothes.query()
      //.then(function(response) {
        //expect(response.data).toEqual(items);
      //});
      //httpBackend.flush();
    //});

  //});

/*  [>/*  describe('when searching for a user', function() {*/

  //var httpBackend;
  //beforeEach(inject(function($httpBackend) {
    //httpBackend = $httpBackend;
    //httpBackend
    //.when("GET", "test/mock/clothes.json")
    //.respond(
      //{ items: items  }

      //);

      //}));
      //});
      //});

      /*[>/*    var items = [*/
      //{
        //"login": "tansaku",
        //"avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
        //"html_url": "https://github.com/tansaku"

      //},
      //{
        //"login": "stephenlloyd",
        //"avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
        //"html_url": "https://github.com/stephenlloyd"

        //}

        //];

        //it('displays search results', function() {
          //ctrl.data;
          //httpBackend.flush();
          //expect(ctrl.searchResult).toEqual(items);

          //});

          //});

          /*});*/


          /*describe('clothesShopFactory', function(){*/
          //var $httpBackend, createController, scope;

          //beforeEach(inject(function ($injector, $rootScope, $controller) {

            //$httpBackend = $injector.get('$httpBackend');
            //jasmine.getJSONFixtures().fixturesPath='base/test/mock';

            //$httpBackend.whenGET('http://localhost:8080').respond(
              //getJSONFixture('test_resultset_list.json')

              //);

              //scope = $rootScope.$new();
              //$controller('clotheShopController', {'$scope': scope});

              //}));

              //it('should have some resultsets', function() {
                //console.log('ciao');
                //$httpBackend.flush();
                //expect(scope.result_sets.length).toBe(59);

                //});


                /*});*/
