const BaseComponent = require('../common/base.component');

class ProductComponent extends BaseComponent {
    constructor() {
        super('#product-list > div.plp-product-list__products > div:nth-child(1)');
    }

    /*get addToBagButton() {
        return this.rootEl.$('#product-list > div.plp-product-list__products > div:nth-child(1) > div.plp-product-list__fragment > div > div > div > div > button.pip-btn.pip-btn--small.pip-btn--icon-emphasised.pip-product-compact__add-to-cart-button');
    }*/

}

module.exports = ProductComponent;