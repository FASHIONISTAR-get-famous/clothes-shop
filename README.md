# clothes-shop

I have decided to use AngularJS as a front end framework in order to create a Single Page App. I am using Jasmine as a test framework, Karma as a test runner and Protractor for the end to end Test

As a first step I've initialised the package managers, bower for the client side (angular mainly) and npm for the server side (Karma).

As second step I've set up Karma (Karma init) requiring PhantomJS as a browser Launcher and Protractor with Selenium for the end to end test framework.

I've started my project by testing the title in the homepage:

describe('The home page', function() {
  it('has a title', function() {
    browser.get('http://localhost:8080');
    expect(browser.getTitle()).toEqual('Clothes Shop');
  });
});
To test the app you need to have installed globally:

NodeJS;
Java Development Kit(JDK);
karma;
Protractor;
Install webdriver and a server (I've used http-server)

$ webdriver-manager update
$ npm install http-server -g
Install the dependencies

$ npn install
$ bower install
e2e:

Run the webdriver manager and http-server

$ webdriver-manager start
$ http-server
Run protractor from the main folder

$ protractor test/e2e/conf.js
Karma:

Run karma from the main folder

$ karma start test/karma.conf.js
Webpage:

$ open index.html
