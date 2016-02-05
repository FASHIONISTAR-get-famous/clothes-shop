## CLOTHES-SHOP

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
