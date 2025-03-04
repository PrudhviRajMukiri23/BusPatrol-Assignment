import { Page } from "@playwright/test";
import PlaywrightActions from "../playwright_actions/actions";
import Asserts from "../playwright_actions/asserts";
import CupcakeIpsumLocators from "../xpaths/cupcake_ipsum_locators";
import logger from "../../../utils/logger";

export default class CupcakeIpsum extends PlaywrightActions {

    private locators: CupcakeIpsumLocators

    constructor() {
        super()
        this.locators = new CupcakeIpsumLocators()
    }

    public getLocators() {
        return this.locators
    }

    public async getTitle(page: Page)  {
        try {
            const title = await this.getPageTitle(page)
            logger.info(`Page title retrieved: ${title}`)
            return title
        } catch (error) {
            logger.error(`Failed to get title: ${error.message}`)
            throw new Error(`Failed to get title: ${error.message}`)
        }
    }

    public async clickGenerate(page: Page, value: string) {
        try {
            if (this.locators.cupcakeIpsum_generateButton.description.includes(value)) {
                logger.info(`Clicking generate button with value: ${value}`)
                await this.clickOnElement(page, this.locators.cupcakeIpsum_generateButton.xpath)
            } else {
                logger.error(`Invalid value: "${value}".`)
                throw new Error(`Invalid value: "${value}".`)
            }
        } catch (error) {
            logger.error(`Error clicking on generate button: ${error.message}`)
            throw new Error(`Failed to click on generate button: ${error.message}`)
        }
    }

    public async elementAbsenceCheck(page: Page, value: string) {
        try {
            if (this.locators.cupcakeIpsum_copyButton.description.includes(value)) {
                const isVisible = await this.isElementVisible(page, this.locators.cupcakeIpsum_copyButton.xpath)
                if (isVisible) {
                    logger.error(`Copy button found before submit: Element is visible with value "${value}".`)
                    throw new Error(`Copy button found before submit: Element is visible with value "${value}".`)
                }
                logger.info(`Copy button not found before submit as expected.`)
            }
        } catch (error) {
            logger.error(`Error checking element absence: ${error.message}`)
            throw new Error(`Failed copy button visible before submit: ${error.message}`)
        }
    }

    public async countInstances(page: Page, expectedCount: Number, value: string) {
        try {
            if (this.locators.cupcakeIpsum_cupCakeIpsumDolorSitAmetInstances.description.includes(value)) {
                await page.waitForSelector(this.locators.cupcakeIpsum_cupCakeIpsumDolorSitAmetInstances.xpath)
                const count = await this.getLocatorsCount(page, this.locators.cupcakeIpsum_cupCakeIpsumDolorSitAmetInstances.xpath)
                logger.info(`Expected count: ${expectedCount}, Actual count: ${count}`)
                if (count !== expectedCount) {
                    throw new Error(`Text mismatch: Locator count "${count}" does not match the expected count "${expectedCount}".`)
                }
                await page.waitForTimeout(2000)
            }
        } catch (error) {
            logger.error(`Error in getting instances: ${error.message}`)
            throw new Error(`Failed to get instance of element: ${error.message}`)
        }
    }

    public async verifyLogoText(page: Page, text: string) {
        try {
            if (this.locators.cupcakeIpsum_logo.description.includes(text)) {
                const locatorText = await this.returnLocatorTextContent(page, this.locators.cupcakeIpsum_logo.xpath)
                logger.info(`Locator text: "${locatorText}", Expected text: "${text}"`)
                if (locatorText !== text) {
                    throw new Error(`Text mismatch: Locator text "${locatorText}" does not match the expected text "${text}".`)
                }
            } else {
                throw new Error(`Locator description does not contain the expected text: "${text}".`)
            }
        } catch (error) {
            logger.error(`Error verifying locator text: ${error.message}`)
            throw new Error(`Failed to verify locator text: ${error.message}`)
        }
    }

    public async verifyParagraphInput(page: Page, locatorName: string, value: string) {
        try {
            if (this.locators.cupcakeIpsum_Paragraph.description.includes(locatorName)) {
                const defaultValue = await Asserts.getValueAttribute(page, this.locators.cupcakeIpsum_Paragraph.xpath, value)
                logger.info(`Default value: "${defaultValue}", Expected value: "${value}"`)
                if (defaultValue !== value) {
                    throw new Error(`Text mismatch: Locator default filled text "${defaultValue}" does not match the expected text "${value}".`)
                }
            } else {
                throw new Error(`Locator default filled value mismatched from "${value}".`)
            }
        } catch (error) {
            logger.error(`Error verifying locator default value: ${error.message}`)
            throw new Error(`Failed to verify locator default value: ${error.message}`)
        }
    }

    public async selectButton(page: Page, value: string) {
        try {
            if (this.locators.cupcakeIpsum_shortParagraphLengthRadio.description.includes(value)) {
                logger.info(`Selecting short paragraph radio button with value: ${value}`)
                await this.clickOnElement(page, this.locators.cupcakeIpsum_shortParagraphLengthRadio.xpath)
            } else if (this.locators.cupcakeIpsum_cupCakeIpsumDolorSitAmetCheckbox.description.includes(value)) {
                logger.info(`Selecting checkbox with value: ${value}`)
                await this.checkBox(page, this.locators.cupcakeIpsum_cupCakeIpsumDolorSitAmetCheckbox.xpath)
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