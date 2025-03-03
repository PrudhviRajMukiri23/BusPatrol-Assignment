import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber"
import { fixtures } from "../hooks/fixtures"
import Asserts from "../../src/playwright_actions/asserts";

setDefaultTimeout(60*1000)
Given('When I travel to {string} as a guest user:', async function (string) {
    await fixtures.cupcakeIpsumInstance.goToUrl(fixtures.page, string)
});

Given('I am on cupcake ipsum page', async function () {
    let title = await fixtures.cupcakeIpsumInstance.getTitle(fixtures.page)
    await Asserts.assertTitleContains(title, fixtures.page)
});

Given('I see {string}', async function (string) {
    await fixtures.cupcakeIpsumInstance.verifyLogoText(fixtures.page, string)
});

Given('I see {string} has {string} filled in', async function (locatorText, value) {
    await fixtures.cupcakeIpsumInstance.verifyParagraphInput(fixtures.page, locatorText, value)
});

When('I select {string} radio button', async function (radioButtonType) {
    await fixtures.cupcakeIpsumInstance.selectButton(fixtures.page, radioButtonType)
});

When('I check off {string}', async function (radioButtonType) {
    await fixtures.cupcakeIpsumInstance.selectButton(fixtures.page, radioButtonType)
});

When('I do not see a {string} button', async function (string) {
    await fixtures.cupcakeIpsumInstance.elementAbsenceCheck(fixtures.page, string)
});

When('I click {string}', async function (string) {
    await fixtures.cupcakeIpsumInstance.clickGenerate(fixtures.page, string)
});

Then('I see {int} instance of {string} on the page', async function (int, string) {
    await fixtures.cupcakeIpsumInstance.countInstances(fixtures.page, int, string)
});