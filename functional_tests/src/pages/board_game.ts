import { Page } from "@playwright/test";
import PlaywrightActions from "../playwright_actions/actions";
import BoardGameLocators from "../xpaths/board_game_locators";
import Asserts from "../playwright_actions/asserts";
import logger from "../../../utils/logger";

export default class BoardGame extends PlaywrightActions {

    private locators: BoardGameLocators

    constructor() {
        super()
        this.locators = new BoardGameLocators()
    }

    public getLocators() {
        return this.locators
    }

    public async getTitle(page: Page) {
        try {
            const title = await this.getPageTitle(page)
            logger.info(`Page title retrieved: ${title}`)
            return title
        } catch (err) {
            logger.error(`Failed to get title: ${err.message}`)
        }
    }

    public async fillField(page: Page, locatorValue: string, text: string) {
        try {
            if (this.locators.advSearch_titleField.decription.includes(locatorValue)) {
                await this.fillValueForTextField(page, this.locators.advSearch_titleField.xpath, text);
                logger.info(`Filled title field with value: ${text}`);
            } else if (this.locators.advSearch_minPublishYearField.decription.includes(locatorValue)) {
                await this.fillValueForTextField(page, this.locators.advSearch_minPublishYearField.xpath, text);
                logger.info(`Filled minimum publish year field with value: ${text}`);
            } else if (this.locators.advSearch_maxPublishYearField.decription.includes(locatorValue)) {
                await this.fillValueForTextField(page, this.locators.advSearch_maxPublishYearField.xpath, text);
                logger.info(`Filled maximum publish year field with value: ${text}`);
            }
        } catch (err) {
            logger.error(`Failed to fill field with value '${text}' for locator '${locatorValue}': ${err.message}`);
        }
    }

    public async fillDropDown(page: Page, locatorValue: string, text: string) {
        try {
            if (this.locators.advSearch_minPlayTimeDropDown.decription.includes(locatorValue)) {
                await this.fillDropDownByValue(page, this.locators.advSearch_minPlayTimeDropDown.xpath, text);
                logger.info(`Filled minimum play time dropdown with value: ${text}`);
            } else if (this.locators.advSearch_maxPlayTimeDropDown.decription.includes(locatorValue)) {
                await this.fillDropDownByValue(page, this.locators.advSearch_maxPlayTimeDropDown.xpath, text);
                logger.info(`Filled maximum play time dropdown with value: ${text}`);
            }
        } catch (err) {
            logger.error(`Failed to fill dropdown with value '${text}' for locator '${locatorValue}': ${err.message}`);
        }
    }

    public async submitAdvancedSearch(page: Page, locatorFinder: string) {
        try {
            if (this.locators.advSearch_submitButton.decription.includes(locatorFinder)) {
                await this.clickOnElement(page, this.locators.advSearch_submitButton.xpath);
                logger.info(`Submitted advanced search using locator: ${locatorFinder}`);
            }
        } catch (err) {
            logger.error(`Failed to submit advanced search for locator '${locatorFinder}': ${err.message}`);
        }
    }

    public async verifySearchResult(page: Page, expectedValue: string) {
        try {
            if (await this.isElementVisible(page, this.locators.advSearch_results.xpath)) {
                let updatedValue = expectedValue.replace(/\(\d{4}\)/g, '');
                await Asserts.assertValueContains(page, this.locators.advSearch_results.xpath, updatedValue);
                logger.info(`Search result verified with expected value: ${updatedValue}`);
            }
        } catch (err) {
            logger.error(`Failed to verify search result for expected value '${expectedValue}': ${err.message}`);
        }
    }

    public async printLinkText(page: Page) {
        try {
            await this.printTextContent(page, this.locators.advSearch_results.xpath, "link name that displayed");
            logger.info("Printed link text content successfully.");
        } catch (err) {
            logger.error(`Failed to print link text: ${err.message}`);
        }
    }
}