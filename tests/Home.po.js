var HomePage = function(){
    this.title = 'Home — Conduit';
    this.signed = element.all(by.xpath("//a[@class='nav-link ng-binding']")).first();

};

module.exports = HomePage;