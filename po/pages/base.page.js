const { Message, Header, Navigation } = require("../components");

class BasePage {
    constructor(url) {
        this.url = url;
        this.header = new Header();
        this.message = new Message();
        this.navigation = new Navigation();
    }
    open() {
        return browser.url(this.url);
    }
}

module.exports = BasePage;   