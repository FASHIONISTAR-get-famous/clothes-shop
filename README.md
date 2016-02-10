## CLOTHES-SHOP

The task is to build a *responsive website* for a clothing retailer that display the items, shopping cart and gives you the possibility to apply *vouchers* and receive *discount*.

## Home page

![alt text](/img/homepage.png)


## Cart

![alt text](/img/Cart.png)


## User Stories:
```
As a User
So that I can see all products
I want to view all products, with price, name, picture and quantity available

As a User
So that I want to purchase a product
I want to add a product to my shopping cart

As a User
So that I want to track my shopping
I want to see a preview of my cart, with subTotal and number of items added

As a User
So that I know if a product is out of stock
I want to see a message If I try to add an out-out-stock product

As a User
So that I don't want purchase a product anymore that I added
I want to remove a product from my shopping cart

As a User
So that I want modify the quantity of product that I am buying
I want to change the quantity per products and see the total change automatically

As a User
So that I can receive a discount
I want to apply a voucher to my shopping cart

As a User
So that i can see how much of a discount I've received
I want to see the discount applied and a confirmation
```


## My approach

I've decided to use [AngularJS](https://angularjs.org/) as a front end framework in order to create a Single Page App.
In particular the app shows two pages (home page and cart) through the built in angular function ng-show.
I've dedice to approach the two pages differently.

In the 'home page' I've used the JS code to manipulate the objects, i.e. when a user add an item to my cart,
the same item would be removed form the stock as well as the sum function etc.
Once the user is happy with the shopping, through the cart link can hide the
shopping list and display the cart in order to modify the shopping cart.

In the 'cart page' I've decided to use Angular in order to modify the
quantity, remove items and automatically update the total amount without perform
any function.

In the end the user can apply a voucher in order to receive three different discount.
 - 5£
 - 10£ if purchase over 50£
 - 15£ if purchase over 75£ and at least one item is in footwear category

## Notable issues

* Although all the tests still pass, there are also not as many protractor tests as I would like to have because I have to fix the asynchronous call that don't let me to completely load the page in order to run protractor and select items.

Although I really enjoyed making this app, I really learned a lot from it. I only wish to had more time.

## Next steps
* I was planning to make a mobile friendly setup.
* Deploy the app to Heroku

## File layout
```
js
├── app.js
├── clothesShopController.js
└── clothesShopFactory.js
test
├── clothesControllerSpec.js
├── clothesFactorySpec.js
├── e2e
│   ├── clothesShopFeature.js
│   └── conf.js
├── karma.conf.js
└── mock
    └── clothes.json
├── index.html
├── package.json
├── README.md
├── bower.json
css
├── animate.css
└── style.css
img
├── Cart.png
├── FlipFlopsRed.png
├── almondToeCourtShoes.jpg
├── birdPrintDressBlack.jpg
├── cottonShortsRed.png
├── flipFlopsBlue.png
├── goldButtonCardiganBlue.jpg
├── homepage.png
├── leatherDriverSaddle.jpg
├── lightweightPathcPocketBlazer.png
├── logo.png
├── midTwistCutoutDressPink.jpeg
├── sharkskinWaistcoat.png
├── shortSleeveShirtGreen.png
├── shortSleeveShirtGrey.jpeg
└── suedeShoesBlue.png

```
## Testing

I am using Jasmine as a test framework, [Karma](https://karma-runner.github.io/0.13/index.html) as a test runner and [Protractor](http://angular.github.io/protractor/#/) for the end to end Test

As a first step I've initialised the package managers, bower for the client side (angular mainly) and npm for the server side (Karma).

As second step I've set up Karma (Karma init) requiring PhantomJS as a browser
Launcher and Protractor with Selenium for the end to end test framework.

I've also mocked the http request and spy on private functions.

I've started my project by testing the title in the homepage:
```
describe('The home page', function() {
  it('has a title', function() {
    browser.get('http://localhost:8080');
    expect(browser.getTitle()).toEqual('Clotheops-Shop');
  });
});
```

## In order to test the app you need to have installed globally:

* [NodeJS](https://nodejs.org/en/);
* [Java Development
Kit(JDK)](http://www.oracle.com/technetwork/java/javase/downloads/index.html);
* [karma](https://karma-runner.github.io/0.13/index.html);
* [Protractor](http://angular.github.io/protractor/#/);

#### Clone the repo
```
$ git clone https://github.com/Mattia46/clothes-shop
$ cd clothes-shop
```

#### Install webdriver and a server (I've used http-server)
  ```
$ webdriver-manager update
$ npm install http-server -g
  ```
####  Install the dependencies
```
$ npn install
$ bower install
```

## How to run functional test:

* Run the webdriver manager and http-server
```
$ webdriver-manager start
$ http-server
```
* Run protractor from the main folder
  ```
$ protractor test/e2e/conf.js
  ```

## How to run the unit test:
```
$ karma start test/karma.conf.js
  ```

## Webpage:
  ```
$ http-server
http://localhost:8080/
```
