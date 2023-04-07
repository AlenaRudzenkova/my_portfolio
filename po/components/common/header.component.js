const BaseComponent = require('./base.component');

class HeaderComponent extends BaseComponent {
    constructor() {
        super('body > header');
    }

    get searchField() {
        return this.rootEl.$('#ikea-search-input');
    }

    get searchButton() {
        return this.rootEl.$('#search-box__searchbutton');
    }

}

module.exports = HeaderComponent;