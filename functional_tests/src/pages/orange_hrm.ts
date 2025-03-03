import { Page } from "@playwright/test";
import PlaywrightActions from "../playwright_actions/actions";
import Asserts from "../playwright_actions/asserts";
import OrangeHrmLocators from "../xpaths/orange_hrm_locators";

export default class OrangeHrm extends PlaywrightActions {

    private locators: OrangeHrmLocators

    constructor() {
        super()
        this.locators = new OrangeHrmLocators()
    }

    public getLocators() {
        return this.locators
    }

    public async getTitle(page: Page) {
        return await this.getPageTitle(page)
    }

    public async getLoggedIn(page: Page, userName: string, password: string) {
        try{
            await this.fillValueForTextField(page, this.locators.orangeHrm_userName.xpath, userName)
            await this.fillValueForTextField(page, this.locators.orangeHrm_password.xpath, password)
            await this.clickOnElement(page, this.locators.orangeHrm_loginButton.xpath)
        } catch(error) {
            console.error('Login failed with error: ', error);
            throw new Error('Login failed with error:'+error);
        }
    }

    public async verifyHeaderValue(page: Page, expectedHeader: string) {
        try{
            if(await this.returnLocatorTextContent(page, this.locators.orangeHrm_pageHeader.xpath) !== expectedHeader) {
                throw new Error(`Header value mismatched.`)

            }
        } catch(error) {
            console.error('Header value mismatched: ', error);
            throw new Error('Wrong Page: '+error);
        }
    }

    public async selectMainMenuOption(page: Page, expectedHeader: string) {
        try{
            let count = await this.getLocatorsCount(page, this.locators.orangeHrm_mainMenuItems.xpath)
            for(let i=0;i<count;i++) {
                    const itemXpath = `(${this.locators.orangeHrm_mainMenuItems.xpath})[${i + 1}]`
                    const itemText = await this.returnLocatorTextContent(page, itemXpath)
                    if(itemText === expectedHeader) {
                    await this.clickOnElement(page, itemXpath)
                }
            }
        } catch(error) {
            console.error('Invalid main menu option', error);
            throw new Error('Unable to select main menu: '+error);
        }
    }


    // public async clickGenerate(page: Page, value: string) {
    //     try {
    //         if(this.locators.cupcakeIpsum_generateButton.description.includes(value)) {
    //             await this.clickOnElement(page, this.locators.cupcakeIpsum_generateButton.xpath)
    //         } else {
    //             throw new Error(`Invalid value: "${value}".`);
    //         }
    //     } catch(error) {
    //         console.error('Error clicking on radio button: ', error);
    //         throw new Error('Failed to click on radio button: '+error);
    //     }
    // }

    // public async elementAbsenceCheck(page: Page, value: string) {
    //     try{
    //         if(this.locators.cupcakeIpsum_copyButton.description.includes(value)) {
    //             if(await this.isElementVisible(page, this.locators.cupcakeIpsum_copyButton.xpath)) {
    //                 throw new Error(`Copy button found: Element is visible "${value}".`)
    //             }
    //         }
    //     } catch(error) {
    //         console.error('`Copy button found before submit: ', error);
    //         throw new Error('Failed copy button visible before submit: '+error);
    //     }
    // }

    // public async countInstances(page: Page, expectedCount: Number, value: string) {
    //     try{
    //         if(this.locators.cupcakeIpsum_cupCakeIpsumDolorSitAmetInstances.description.includes(value)) {
    //             page.waitForSelector(this.locators.cupcakeIpsum_cupCakeIpsumDolorSitAmetInstances.xpath)
    //             let count = await this.getLocatorsCount(page, this.locators.cupcakeIpsum_cupCakeIpsumDolorSitAmetInstances.xpath)
    //             if(count !== expectedCount) {
    //                 throw new Error(`Text mismatch: Locator count "${count}" does not match the expected text "${expectedCount}".`)
    //             }
    //             await page.waitForTimeout(2000)
    //         }
    //     } catch(error) {
    //         console.error('Error in getting instances: ', error);
    //         throw new Error('Failed to get instance of element: '+error);
    //     }
    // }

    // public async verifyLogoText(page: Page, text: string) {
    //     try{
    //         if(this.locators.cupcakeIpsum_logo.description.includes(text)) {
    //             let locatorText = await this.returnLocatorTextContent(page, this.locators.cupcakeIpsum_logo.xpath)
    //             if(locatorText !== text) {
    //                 throw new Error(`Text mismatch: Locator text "${locatorText}" does not match the expected text "${text}".`)
    //             }
    //         } else {
    //             throw new Error(`Locator description does not contain the expected text: "${text}".`);
    //         }
    //     } catch(error) {
    //         console.error('Error verifying locator text: ', error);
    //         throw new Error('Failed to verify locator text: '+error);
    //     }
    // }

    // public async verifyParagraphInput(page: Page, locatorName: string, value: string) {
    //     try {
    //         if(this.locators.cupcakeIpsum_Paragraph.description.includes(locatorName)) {
    //             let defaultValue = await Asserts.getValueAttribute(page, this.locators.cupcakeIpsum_Paragraph.xpath, value)
    //             if(defaultValue !== value) {
    //                 throw new Error(`Text mismatch: Locator default filled text "${defaultValue}" does not match the expected text "${value}".`)
    //             }
    //         } else {
    //             throw new Error(`Locator default filled value mismatched from "${value}".`);
    //         }
    //     } catch(error) {
    //         console.error('Error verifying locator default value: ', error);
    //         throw new Error('Failed to verify locator default value: '+error);
    //     }
    // }

    // public async selectButton(page: Page, value: string) {
    //     try {
    //         if(this.locators.cupcakeIpsum_shortParagraphLengthRadio.description.includes(value)) {
    //             await this.clickOnElement(page, this.locators.cupcakeIpsum_shortParagraphLengthRadio.xpath)
    //         } else if(this.locators.cupcakeIpsum_cupCakeIpsumDolorSitAmetCheckbox.description.includes(value)) {
    //             await this.checkBox(page, this.locators.cupcakeIpsum_cupCakeIpsumDolorSitAmetCheckbox.xpath)
    //         } else {
    //             throw new Error(`Invalid value: "${value}".`);
    //         }
    //     } catch(error) {
    //         console.error('Error clicking on radio button: ', error);
    //         throw new Error('Failed to click on radio button: '+error);
    //     }
    // }
}