import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber"
import { fixtures } from "../hooks/fixtures"
import Asserts from "../../src/playwright_actions/asserts";

setDefaultTimeout(60*1000)
Given('When I travel to {string} as a guest', async function (string: string) {
    await fixtures.markSheetInstance.goToUrl(fixtures.page, string)
});

Given('I am on {string} page', async function (string) {
    await Asserts.assertTitleContains(string, fixtures.page)
});

Given('I see {string} as title', async function (string) {
    await fixtures.markSheetInstance.verifyHeading(fixtures.page, string)
});

When('I click on {string} link', async function (string) {
    await fixtures.markSheetInstance.clickOnButton(fixtures.page, string)
});

When('I see CSS learning content with title {string}', async function (string) {
    await fixtures.markSheetInstance.verifyHeading(fixtures.page, string)
});

When('I click on {string} navigation menu option', async function (string) {
    await fixtures.markSheetInstance.clickOnButton(fixtures.page, string)
});

Then('I see the name {string} on home page', async function (string) {
    await fixtures.markSheetInstance.verifyHeading(fixtures.page, string)
});
