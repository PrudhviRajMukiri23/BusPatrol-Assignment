import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber"
import { fixtures } from "../hooks/fixtures"
import Asserts from "../../src/playwright_actions/asserts";

setDefaultTimeout(100*1000)
Given('When I navigated to {string}', async function (string) {
    fixtures.orangeHrmInstance.goToUrl(fixtures.page, string)
});

Given('I am on orangehrm login page', async function () {
    let title = await fixtures.orangeHrmInstance.getTitle(fixtures.page)
    await Asserts.assertTitleContains(title, fixtures.page)
});


When('Login wil Credentials {string} and {string}', async function (username, password) {
    await fixtures.orangeHrmInstance.getLoggedIn(fixtures.page, username, password)
});

When('I am directed to {string}.', async function (headerValue) {
    await fixtures.orangeHrmInstance.verifyHeaderValue(fixtures.page, headerValue)
});

When('I click on {string} button on left', async function (mainMenuValue) {
    await fixtures.orangeHrmInstance.selectMainMenuOption(fixtures.page, mainMenuValue)
});

When('I see Records Found on page', async function () {
    await fixtures.orangeHrmInstance.veifyAdminRecords(fixtures.page)
});

When('Print the result displayed for Records Found.', async function () {
    await fixtures.orangeHrmInstance.printAdminTableData(fixtures.page)
});

When('I click on the Profile displayed on Right top corner of Screen', async function () {
    await fixtures.orangeHrmInstance.clickProfileMenu(fixtures.page)
});

When('I see {string}, {string}, {string}, {string} options', async function (string, string2, string3, string4) {
    let list = [string, string2, string3, string4]
    await fixtures.orangeHrmInstance.verifyProfileMenuOptions(fixtures.page, list)
});

When('I click on {string}', async function (logout) {
    await fixtures.orangeHrmInstance.clickOnLogout(fixtures.page, logout)
});

Then('I am logged out and directed to the login Page.', async function () {
    await fixtures.orangeHrmInstance.verifyLoginPage(fixtures.page)
});