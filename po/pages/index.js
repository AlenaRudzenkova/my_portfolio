const BasePage = require('./base.page');
const HomePage = require('./home.page');
const SearchPage = require('./search.page');

function page(name) {
    const items = {
        home: new HomePage(),
        search: new SearchPage(),
    };
    return items[name.toLowerCase()];
}

module.exports = {
    BasePage,
    HomePage,
    SearchPage,
    page,
};

