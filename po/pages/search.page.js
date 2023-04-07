const BasePage = require('./base.page');
const { SearchSummary, Product } = require('../components');

class SearchPage extends BasePage {
    constructor() {
        super('https://www.ikea.com/es/es/search');
        this.searchSummary = new SearchSummary();
        this.product = new Product();
        /*this.navigation = new Navigation();*/
    }
}

module.exports = SearchPage;