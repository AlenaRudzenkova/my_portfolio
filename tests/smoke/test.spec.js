const { page } = require('../../po');

describe("Smoke Test", () => {

    it("Verify home page title", async () => {
        await browser.url("https://www.ikea.com/es/es/");
        const pageTitle = await browser.getTitle();
        expect(pageTitle).toEqual("Muebles y Decoración al Mejor Precio - IKEA");
    })

    it("Verify header is displayed on the home page", async () => {
        await expect(page('home').header.rootEl).toBeDisplayed();
    })

    it("Verify value proposition message is displayed on the home page", async () => {
        await expect(page('home').message.rootEl).toBeDisplayed();
    })

    it("Verify navigation component is displayed in the header", async () => {
        await expect(page('home').navigation.rootEl).toBeDisplayed();
    })

    it("Search for a product", async () => {
        await page('home').header.searchField.setValue("colchon");
        await page('home').header.searchButton.click();
        await expect(page('search').searchSummary.searchHeading).toHaveText('Se muestran coincidencias para "colchon"');
    })

    it("Add a product to the shopping bag", async () => {
        //await page('home').header.searchField.setValue("colchon");
        //await page('home').header.searchButton.click();
        await page('search').product;

    })


})