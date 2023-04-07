const BaseComponent = require('./base.component');

class MessageComponent extends BaseComponent {
    constructor() {
        super('#value-proposition-message');
    }

    /*input(name) {
        const selectors = {
            name: '#Name input',
            phone: 'input[id*="Mobile"]',
            email: 'input[name="Email"]',
            education: 'input[name="Education"]',
            designation: 'input[name="Designation"]',
        };

        return this.rootEl.$(selectors[name.toLowerCase()]);
    }

    errorMessage(name) {
        const selectors = {
            email: 'label#Email-info',
            name: 'label#Name-info',
            phone: "label#undefined-info"
        };

        return this.rootEl.$(selectors[name.toLowerCase()]);
    }*/
}

module.exports = MessageComponent;