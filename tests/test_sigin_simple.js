describe('Signin test', function() {

    var email = element(by.model('$ctrl.formData.email'));
    var password = element(by.model('$ctrl.formData.password'));
    var signinButton = element(by.xpath("//button[@class='btn btn-lg btn-primary pull-xs-right ng-binding']"));
    var signed = element.all(by.xpath("//a[@class='nav-link ng-binding']")).first();
    var text = "username has already been taken";
   // var duplicaterusername = element(by.cssContainingText('li.ng-binding.ng-scope', text));
    
   
    beforeEach(function() {
      browser.get('http://localhost:4000/#!/login');
    });
  
    it('it should have a title', function() {
      expect(browser.getTitle()).toEqual('Sign in — Conduit');
    });
  
    it(' it should display error when username is duplicated', function() {
  
      email.sendKeys('eli24232226652@test.te');
      password.sendKeys('123456789');
  
      //clica no botão e depois faz o assert
      signinButton.click().then(function () {
       /// expect(duplicaterusername.getText()).toEqual(text);
      }); 
  
     });
  
    it('it should sign up new user', function() {
      email.sendKeys('eli876544@test.te');
      password.sendKeys('123456789');
  
      //clica no botão e depois faz o assert
      signinButton.click().then(function() {
        expect(signed.getText()).toEqual('eli876544');
      }); 
  
    });
  }); 
  