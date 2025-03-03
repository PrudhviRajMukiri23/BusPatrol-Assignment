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

// ? And I see Records Found on page
// Undefined. Implement with the following snippet:

//   When('I see Records Found on page', async function () {
//     // Write code here that turns the phrase above into concrete actions
//     return 'pending';
//   });

// ? And Print the result displayed for Records Found.
// Undefined. Implement with the following snippet:

//   When('Print the result displayed for Records Found.', async function () {
//     // Write code here that turns the phrase above into concrete actions
//     return 'pending';
//   });

// ? And I click on the Profile displayed on Right top corner of Screen
// Undefined. Implement with the following snippet:

//   When('I click on the Profile displayed on Right top corner of Screen', async function () {
//     // Write code here that turns the phrase above into concrete actions
//     return 'pending';
//   });

// ? And I see About, Support, Change Passowrd, Logout options
// Undefined. Implement with the following snippet:

//   When('I see About, Support, Change Passowrd, Logout options', async function () {
//     // Write code here that turns the phrase above into concrete actions
//     return 'pending';
//   });

// ? And I click on Logout
// Undefined. Implement with the following snippet:

//   When('I click on Logout', async function () {
//     // Write code here that turns the phrase above into concrete actions
//     // Write code here that turns the phrase above into concrete actions
//     return 'pending';
//   });

// ? Then I am logged out and directed to the login Page.
// Undefined. Implement with the following snippet:

//   Then('I am logged out and directed to the login Page.', async function () {
//     // Write code here that turns the phrase above into concrete actions
//     return 'pending';
//   });