import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber"
import { fixtures } from "../hooks/fixtures"
import BoardGame from "../../src/pages/board_game";
import Asserts from "../../src/playwright_actions/asserts";

let boardGameInstance: BoardGame

setDefaultTimeout(60*1000)
Given('When I travel to {string} as a guest user', async function (string: string) {
    boardGameInstance = new BoardGame()
    await boardGameInstance.goToUrl(fixtures.page, string)
    
});

Given('I am on boardgame advanced search page', async function () {
    let title = await boardGameInstance.getTitle(fixtures.page)
    await Asserts.assertTitleContains(title, fixtures.page)
});

When('I fill in the {string} field with {string}', async function (locatorFinder, value) {
    await boardGameInstance.fillField(fixtures.page, locatorFinder, value)
});

When('I select {string} from the {string} drop down', async function (value, locatorFinder) {
    await boardGameInstance.fillDropDown(fixtures.page, locatorFinder, value)
});

When('Clicking {string}', async function (locatorFinder) {
    await boardGameInstance.submitAdvancedSearch(fixtures.page, locatorFinder)
});

Then('I navigated to new page having {string} link', async function (expectedValue) {
    await boardGameInstance.verifySearchResult(fixtures.page, expectedValue)
});

Then('I print the link name that displayed', async function () {
    await boardGameInstance.printLinkText(fixtures.page)
});

