const BaseComponent = require('../common/base.component');

class SearchSummaryComponent extends BaseComponent {
    constructor() {
        super('.search-summary');
    }

    get searchHeading() {
        return this.rootEl.$('.search-summary__heading');
    }

}

module.exports = SearchSummaryComponent;