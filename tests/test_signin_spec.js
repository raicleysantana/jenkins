var SigninPage = require('./SigInPage.po');
var HomePage = require('./Home.po');


describe('Sign Up Test', function() {
  var signInPage = new SigninPage();
  var homePage = new HomePage();

  beforeEach(function() {
    signInPage.visit();
    browser.driver.manage().window().maximize();
  });

  it('it should have a title', function() {
    expect(browser.getTitle()).toEqual(signInPage.title);
  });


  it('it should sign up new user', function(){
    signInPage.email.sendKeys('santana01@restuu.rr');
    signInPage.password.sendKeys('1234567890');
    signInPage.signInButton.click().then(function() {
       // expect(homePage.signed.getText()).toEqual('santana01');
      });
  });
});
