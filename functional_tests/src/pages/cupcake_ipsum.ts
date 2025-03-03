import { Page } from "@playwright/test";
import PlaywrightActions from "../playwright_actions/actions";
import Asserts from "../playwright_actions/asserts";
import CupcakeIpsumLocators from "../xpaths/cupcake_ipsum_locators";

export default class CupcakeIpsum extends PlaywrightActions {

    private locators: CupcakeIpsumLocators

    constructor() {
        super()
        this.locators = new CupcakeIpsumLocators()
    }

    public getLocators() {
        return this.locators
    }

    public async getTitle(page: Page) {
        return await this.getPageTitle(page)
    }

    public async elementVisibleCheck(page: Page, expectedCount: Number, value: string) {
        try{
            if(this.locators.cupcakeIpsum_copyButton.description.includes(value)) {
                if(!(await this.isElementVisible(page, this.locators.cupcakeIpsum_copyButton.xpath))) {
                    
                }
            }
        } catch(error) {
            console.error('Error in getting instances: ', error);
            throw new Error('Failed to get instance of element: '+error);
        }
    }

    public async countInstances(page: Page, expectedCount: Number, value: string) {
        try{
            if(this.locators.cupcakeIpsum_cupCakeIpsumDolorSitAmetInstances.description.includes(value)) {
                let count = await this.getLocatorsCount(page, this.locators.cupcakeIpsum_cupCakeIpsumDolorSitAmetInstances.xpath)
                if(count !== expectedCount) {
                    throw new Error(`Text mismatch: Locator count "${count}" does not match the expected text "${expectedCount}".`)
                }
            }
        } catch(error) {
            console.error('Error in getting instances: ', error);
            throw new Error('Failed to get instance of element: '+error);
        }
    }

    public async verifyLogoText(page: Page, text: string) {
        try{
            if(this.locators.cupcakeIpsum_logo.description.includes(text)) {
                let locatorText = await this.returnLocatorTextContent(page, this.locators.cupcakeIpsum_logo.xpath)
                if(locatorText !== text) {
                    throw new Error(`Text mismatch: Locator text "${locatorText}" does not match the expected text "${text}".`)
                }
            } else {
                throw new Error(`Locator description does not contain the expected text: "${text}".`);
            }
        } catch(error) {
            console.error('Error verifying locator text: ', error);
            throw new Error('Failed to verify locator text: '+error);
        }
    }

    public async verifyParagraphInput(page: Page, locatorName: string, value: string) {
        try {
            if(this.locators.cupcakeIpsum_Paragraph.description.includes(locatorName)) {
                let defaultValue = await Asserts.getValueAttribute(page, this.locators.cupcakeIpsum_Paragraph.xpath, value)
                if(defaultValue !== value) {
                    throw new Error(`Text mismatch: Locator default filled text "${defaultValue}" does not match the expected text "${value}".`)
                }
            } else {
                throw new Error(`Locator default filled value mismatched from "${value}".`);
            }
        } catch(error) {
            console.error('Error verifying locator default value: ', error);
            throw new Error('Failed to verify locator default value: '+error);
        }
    }

    public async selectButton(page: Page, value: string) {
        try {
            if(this.locators.cupcakeIpsum_shortParagraphLengthRadio.description.includes(value)) {
                await this.clickOnElement(page, this.locators.cupcakeIpsum_shortParagraphLengthRadio.xpath)
            } else if(this.locators.cupcakeIpsum_cupCakeIpsumDolorSitAmetCheckbox.description.includes(value)) {
                await this.checkBox(page, this.locators.cupcakeIpsum_cupCakeIpsumDolorSitAmetCheckbox.xpath)
            } else {
                throw new Error(`Invalid value: "${value}".`);
            }
        } catch(error) {
            console.error('Error clicking on radio button: ', error);
            throw new Error('Failed to click on radio button: '+error);
        }
    }
}