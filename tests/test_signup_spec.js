var SignupPage = require('./SignupPage.po');
var HomePage = require('./Home.po');


describe('Sign Up Test', function() {
  var signupPage = new SignupPage();
  var homePage = new HomePage();

  beforeEach(function() {
    signupPage.visit();
    browser.driver.manage().window().maximize();
  });

  it('it should have a title', function() {
    expect(browser.getTitle()).toEqual(signupPage.title);
  });


  it('it should sign up new user', function(){
    signupPage.username.sendKeys('santana01');
    signupPage.email.sendKeys('santana01@restuu.rr');
    signupPage.password.sendKeys('1234567890');
    signupPage.signupButton.click().then(function() {
        expect(homePage.signed.getText()).toEqual('santana01');
      });
  });
});
