import test, { Page } from "@playwright/test";
import PlaywrightActions from "../playwright_actions/actions";
import Asserts from "../playwright_actions/asserts";
import logger from "../../../utils/logger";
import MarksSheetLocators from "../xpaths/marks_sheet_locators";

export default class MarkSheet extends PlaywrightActions {

    private locators: MarksSheetLocators

    constructor() {
        super()
        this.locators = new MarksSheetLocators()
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

    public async verifyHeading(page: Page, text: string) {
        try {
            if (this.locators.marksSheet_LearCssBookTitle.description.includes(text)) {
                const locatorText = await (await this.returnLocatorTextContent(page, this.locators.marksSheet_LearCssBookTitle.xpath)).trim()
                logger.info(`Locator text: "${locatorText}", Expected text: "${text}"`)
                if (locatorText !== text) {
                    throw new Error(`Text mismatch: Locator text "${locatorText}" does not match the expected text "${text}".`)
                }
            } else if(this.locators.marksSheet_CssPageHeading.description.includes(text)) {
                let locatorText = await (await this.returnLocatorTextContent(page, this.locators.marksSheet_CssPageHeading.xpath)).trim()
                logger.info(`Locator text: "${locatorText}", Expected text: "${text}"`)
                if (locatorText !== text) {
                    throw new Error(`Text mismatch: Locator text "${locatorText}" does not match the expected text "${text}".`)
                }
            } else if(this.locators.marksSheet_CssPageNavMenuHomeHiText.description.includes(text)) {
                let locatorText = await (await this.returnLocatorTextContent(page, this.locators.marksSheet_CssPageNavMenuHomeHiText.xpath)).trim()
                logger.info(`Locator text: "${locatorText}", Expected text: "${text}"`)
                locatorText = locatorText.replace(/[^a-zA-Z]/g, '')
                if (locatorText.includes(text)) {
                    throw new Error(`Text mismatch: Locator text "${locatorText}" does not includes the expected text "${text}".`)
                }
            }
            else {
                throw new Error(`Locator description does not contain the expected text: "${text}".`)
            }
        } catch (error) {
            logger.error(`Error verifying locator text: ${error.message}`)
            throw new Error(`Failed to verify locator text: ${error.message}`)
        }
    }

    public async clickOnButton(page: Page, value: string) {
        try {
            if (this.locators.marksSheet_CssBookGetItNow.description.includes(value.toLowerCase())) {
                logger.info(`Selecting get it now button with value: ${value}`)
                await this.clickOnElement(page, this.locators.marksSheet_CssBookGetItNow.xpath)
            } else if (this.locators.marksSheet_CssPageNavMenuHome.description.includes(value)) {
                logger.info(`Selecting get it now button with value: ${value}`)
                await this.clickOnElement(page, this.locators.marksSheet_CssPageNavMenuHome.xpath)
            } else {
                logger.error(`Invalid value: "${value}".`)
                throw new Error(`Invalid value: "${value}".`)
            }
        } catch (error) {
            logger.error(`Error selecting button: ${error.message}`)
            throw new Error(`Failed to select button: ${error.message}`)
        }
    }

}