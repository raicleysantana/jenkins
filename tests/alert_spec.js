describe('Protractor Demo', function() {

    beforeEach(function() {
        browser.get("https://chercher.tech/practice/practice-pop-ups-selenium-webdriver");
        browser.ignoreSynchronization = true; 
      });
	it('Alerts operation', function() {
		element(by.name("alert")).click();
		let ale = browser.switchTo().alert();
        ale.accept();        
        browser.sleep(20);
    });    
});