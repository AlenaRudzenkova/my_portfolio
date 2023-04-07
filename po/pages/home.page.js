const BasePage = require('./base.page');
const { Message, Header, Navigation } = require('../components');

class HomePage extends BasePage {
    constructor() {
        super('https://www.ikea.com/es/es/');
        this.message = new Message();
        this.header = new Header();
        this.navigation = new Navigation();
    }
}

module.exports = HomePage;