var SignInPage = function(){

    this.title = 'Sign in — Conduit';
    this.dirNgBind = element(by.linkText('ngBind'));
    this.email = element(by.model('$ctrl.formData.email'));
    this.password = element(by.model('$ctrl.formData.password'));
    this.signInButton = element(by.xpath("//button[@class='btn btn-lg btn-primary pull-xs-right ng-binding']"));
    var text = "username has already been taken";
    this.duplicaterusername = element(by.cssContainingText('li.ng-binding.ng-scope', text));

};

SignInPage.prototype.visit = function(){
    browser.get('http://localhost:4000/#!/login');
};

module.exports = SignInPage;