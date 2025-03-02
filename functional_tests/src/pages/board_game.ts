import { Page } from "@playwright/test";
import PlaywrightActions from "../playwright_actions/actions";
import BoardGameLocators from "../xpaths/board_game_locators";
import Asserts from "../playwright_actions/asserts";

export default class BoardGame extends PlaywrightActions {

    private locators: BoardGameLocators

    constructor() {
        super()
        this.locators = new BoardGameLocators
    }

    public getLocators() {
        return this.locators
    }

    public async getTitle(page: Page) {
        return await this.getPageTitle(page)
    }

    public async fillField(page: Page, locatorValue: string, text: string) {
        if(this.locators.advSearch_titleField.decription.includes(locatorValue))
            await this.fillValueForTextField(page, this.locators.advSearch_titleField.xpath, text)
        else if(this.locators.advSearch_minPublishYearField.decription.includes(locatorValue))
            await this.fillValueForTextField(page, this.locators.advSearch_minPublishYearField.xpath, text)
        else if(this.locators.advSearch_maxPublishYearField.decription.includes(locatorValue))
            await this.fillValueForTextField(page, this.locators.advSearch_maxPublishYearField.xpath, text)
    }

    public async fillDropDown(page: Page, locatorValue: string, text: string) {
        if(this.locators.advSearch_minPlayTimeDropDown.decription.includes(locatorValue))
            await this.fillDropDownByValue(page, this.locators.advSearch_minPlayTimeDropDown.xpath, text)
        else if(this.locators.advSearch_maxPlayTimeDropDown.decription.includes(locatorValue))
            await this.fillDropDownByValue(page, this.locators.advSearch_maxPlayTimeDropDown.xpath, text)
    }

    public async submitAdvancedSearch(page: Page, locatorFinder: string) {
        if(this.locators.advSearch_submitButton.decription.includes(locatorFinder))
            await this.clickOnElement(page, this.locators.advSearch_submitButton.xpath)
    }

    public async verifySearchResult(page: Page, expectedValue: string) {
        if(await this.isElementVisible(page, this.locators.advSearch_results.xpath)) {
            let updatedValue = expectedValue.replace(/\(\d{4}\)/g, '')
            await Asserts.assertValueContains(page, this.locators.advSearch_results.xpath, updatedValue)
        }
    }

    public async printLinkText(page: Page) {
        await this.printTextContent(page, this.locators.advSearch_results.xpath, "link name that displayed")
    }
}