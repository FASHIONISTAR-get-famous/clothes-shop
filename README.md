## CLOTHES-SHOP

### Task
The task is to build a *responsive website* for a clothing retailer that display the items, shopping cart and gives you the possibility to apply *vouchers* and receive *discount*.

#### User Stories:
```
As a User
So that I can see all products
I want to view all products, with price, name and picture

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

![alt text](/img/homepage.png)
![alt text](img/cart.png)


I have decided to use [AngularJS](https://angularjs.org/) as a front end framework in order to create a Single Page App.
I am using Jasmine as a test framework, [Karma](https://karma-runner.github.io/0.13/index.html) as a test runner and [Protractor](http://angular.github.io/protractor/#/) for the end to end Test

As a first step I've initialised the package managers, bower for the client side (angular mainly) and npm for the server side (Karma).

As second step I've set up Karma (Karma init) requiring PhantomJS as a browser
Launcher and Protractor with Selenium for the end to end test framework.

I've started my project by testing the title in the homepage:
```
describe('The home page', function() {
  it('has a title', function() {
    browser.get('http://localhost:8080');
    expect(browser.getTitle()).toEqual('Clotheops-Shop');
  });
});
```
To test the app you need to have installed globally:
 - [NodeJS](https://nodejs.org/en/);
 - [Java Development
Kit(JDK)](http://www.oracle.com/technetwork/java/javase/downloads/index.html);
 - [karma](https://karma-runner.github.io/0.13/index.html);
 - [Protractor](http://angular.github.io/protractor/#/);

Clone the repo
```
$ git clone https://github.com/Mattia46/clothes-shop
$ cd clothes-shop
```

 Install webdriver and a server (I've used http-server)
  ```
$ webdriver-manager update
$ npm install http-server -g
  ```
  Install the dependencies
```
$ npn install
$ bower install
```

##### e2e:

  Run the webdriver manager and http-server
```
$ webdriver-manager start
$ http-server
```
  Run protractor from the main folder
  ```
$ protractor test/e2e/conf.js
  ```

##### Karma:
  Run karma from the main folder
```
$ karma start test/karma.conf.js
  ```

##### Webpage:
  ```
$ http-server  
  ```
on the webpage 
```
http://localhost:8080/
```
