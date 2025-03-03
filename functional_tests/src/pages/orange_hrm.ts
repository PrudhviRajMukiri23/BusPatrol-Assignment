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

    public async veifyAdminRecords(page: Page) {
        try{
                if(!await this.isElementVisible(page, this.locators.orangeHrm_adminTableBody.xpath)) {
                    throw new Error(`Records table not found: Element is not visible".`)
                }
        } catch(error) {
            console.error('Records table not found: ', error);
            throw new Error('Element not found: '+error);
        }
    }

    public async printAdminTableData(page: Page) {
        try{
            let count = await this.getLocatorsCount(page, this.locators.orangeHrm_adminTableBodyData.xpath)
            for(let i=0;i<count;i++) {
                    const itemXpath = `${this.locators.orangeHrm_adminTableBodyData.xpath}[${i + 1}]/div`
                    const itemText = await this.returnLocatorTextContent(page, itemXpath)
                    console.log(itemText)
            }
        } catch(error) {
            console.error('Data not found', error);
            throw new Error('Admin table data not found'+error);
        }
    }

    public async clickProfileMenu(page: Page) {
        try { 
            await this.clickOnElement(page, this.locators.orangeHrm_loggedProfileName.xpath)
        } catch(error) {
            console.error('Error clicking on profile menu: ', error);
            throw new Error('Failed to click on profile menu: '+error);
        }
    }

    public async verifyLoginPage(page: Page) {
        try { 
            let text = await this.returnLocatorTextContent(page, this.locators.orangeHrm_loginPageHeader.xpath)
            if(text.toLowerCase() !== 'login') {
                throw new Error(`Not landed on Login page`)
            }
        } catch(error) {
            console.error('Error clicking on profile menu: ', error);
            throw new Error('Failed to click on profile menu: '+error);
        }
    }

    public async verifyProfileMenuOptions(page: Page, list) {
        try{
            for(let i=0;i<list.length;i++) {
                let currXpath = this.locators.orangeHrm_loggedProfileMenuLinks.xpath+"["+(i+1)+"]"
                let itemText = await this.returnLocatorTextContent(page, currXpath) 
                console.log("Profile Menu Option "+(i+1)+": "+itemText)
            }
        } catch(error) {
            console.error('Error in printing menu options: ', error);
            throw new Error('Error while printing menu options: '+error);
        }
    }

    public async clickOnLogout(page: Page, logout) {
        try{
            let count = await this.getLocatorsCount(page, this.locators.orangeHrm_loggedProfileMenuLinks.xpath)
            for(let i=0;i<count;i++) {
                let currXpath = this.locators.orangeHrm_loggedProfileMenuLinks.xpath+"["+(i+1)+"]"
                let itemText = await this.returnLocatorTextContent(page, currXpath) 
                if(itemText === logout) {
                    await this.clickOnElement(page, currXpath)
                }
            }
        } catch(error) {
            console.error('Error while loging out', error);
            throw new Error('Error on clicking:  '+error);
        }
    }

}