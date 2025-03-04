import { Page } from "@playwright/test";
import PlaywrightActions from "../playwright_actions/actions";
import Asserts from "../playwright_actions/asserts";
import OrangeHrmLocators from "../xpaths/orange_hrm_locators";
import logger from "../../../utils/logger";

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
        try {
            const title = await this.getPageTitle(page)
            logger.info(`Page title retrieved: ${title}`)
            return title
        } catch (error) {
            logger.error(`Failed to get title: ${error.message}`)
            throw new Error(`Failed to get title: ${error.message}`)
        }
    }

    public async getLoggedIn(page: Page, userName: string, password: string) {
        try {
            logger.info(`Filling in username: ${userName} and password`)
            await this.fillValueForTextField(page, this.locators.orangeHrm_userName.xpath, userName)
            await this.fillValueForTextField(page, this.locators.orangeHrm_password.xpath, password)
            await this.clickOnElement(page, this.locators.orangeHrm_loginButton.xpath)
            logger.info(`Logged in successfully with username: ${userName}`)
        } catch (error) {
            logger.error(`Login failed with error: ${error.message}`)
            throw new Error(`Login failed with error: ${error.message}`)
        }
    }

    public async verifyHeaderValue(page: Page, expectedHeader: string) {
        try {
            const headerText = await this.returnLocatorTextContent(page, this.locators.orangeHrm_pageHeader.xpath)
            if (headerText !== expectedHeader) {
                logger.error(`Header value mismatched. Expected: ${expectedHeader}, Found: ${headerText}`)
                throw new Error(`Header value mismatched.`)
            }
            logger.info(`Header value matched: ${expectedHeader}`)
        } catch (error) {
            logger.error(`Error verifying header value: ${error.message}`)
            throw new Error(`Wrong Page: ${error.message}`)
        }
    }

    public async selectMainMenuOption(page: Page, expectedHeader: string)  {
        try {
            let count = await this.getLocatorsCount(page, this.locators.orangeHrm_mainMenuItems.xpath)
            logger.info(`Found ${count} main menu items`)
            for (let i = 0; i < count; i++) {
                const itemXpath = `(${this.locators.orangeHrm_mainMenuItems.xpath})[${i + 1}]`
                const itemText = await this.returnLocatorTextContent(page, itemXpath)
                if (itemText === expectedHeader) {
                    logger.info(`Found menu item: ${expectedHeader}. Clicking on it.`)
                    await this.clickOnElement(page, itemXpath)
                    break
                }
            }
        } catch (error) {
            logger.error(`Error selecting main menu option: ${error.message}`)
            throw new Error(`Unable to select main menu: ${error.message}`)
        }
    }

    public async veifyAdminRecords(page: Page) {
        try {
            const isVisible = await this.isElementVisible(page, this.locators.orangeHrm_adminTableBody.xpath)
            if (!isVisible) {
                logger.error(`Records table not found: Element is not visible.`)
                throw new Error(`Records table not found: Element is not visible.`)
            }
            logger.info(`Admin records table is visible.`)
        } catch (error) {
            logger.error(`Error verifying admin records: ${error.message}`)
            throw new Error(`Element not found: ${error.message}`)
        }
    }

    public async printAdminTableData(page: Page) {
        try {
            const count = await this.getLocatorsCount(page, this.locators.orangeHrm_adminTableBodyData.xpath)
            logger.info(`Found ${count} records in the admin table.`)
            for (let i = 0; i < count; i++) {
                const itemXpath = `${this.locators.orangeHrm_adminTableBodyData.xpath}[${i + 1}]/div`
                const itemText = await this.returnLocatorTextContent(page, itemXpath)
                logger.info(`Admin table data: ${itemText}`)
                console.log(itemText)
            }
        } catch (error) {
            logger.error(`Error in printing admin table data: ${error.message}`)
            throw new Error(`Admin table data not found: ${error.message}`)
        }
    }

    public async clickProfileMenu(page: Page)  {
        try {
            logger.info(`Clicking on profile menu`)
            await this.clickOnElement(page, this.locators.orangeHrm_loggedProfileName.xpath)
        } catch (error) {
            logger.error(`Error clicking on profile menu: ${error.message}`)
            throw new Error(`Failed to click on profile menu: ${error.message}`)
        }
    }

    public async verifyLoginPage(page: Page) {
        try {
            const text = await this.returnLocatorTextContent(page, this.locators.orangeHrm_loginPageHeader.xpath)
            logger.info(`Login page header text: ${text}`)
            if (text.toLowerCase() !== 'login') {
                logger.error(`Not landed on Login page. Expected "login", but found "${text}"`)
                throw new Error(`Not landed on Login page`)
            }
        } catch (error) {
            logger.error(`Error verifying login page: ${error.message}`)
            throw new Error(`Failed to verify login page: ${error.message}`)
        }
    }

    public async verifyProfileMenuOptions(page: Page, list: string[])  {
        try {
            logger.info(`Verifying profile menu options`)
            for (let i = 0; i < list.length; i++) {
                const currXpath = `${this.locators.orangeHrm_loggedProfileMenuLinks.xpath}[${i + 1}]`
                const itemText = await this.returnLocatorTextContent(page, currXpath)
                logger.info(`Profile Menu Option ${i + 1}: ${itemText}`)
                console.log(`Profile Menu Option ${i + 1}: ${itemText}`)
            }
        } catch (error) {
            logger.error(`Error in printing profile menu options: ${error.message}`)
            throw new Error(`Error while printing profile menu options: ${error.message}`)
        }
    }

    public async clickOnLogout(page: Page, logout: string) {
        try {
            const count = await this.getLocatorsCount(page, this.locators.orangeHrm_loggedProfileMenuLinks.xpath)
            logger.info(`Found ${count} profile menu options`)
            for (let i = 0; i < count; i++) {
                const currXpath = `${this.locators.orangeHrm_loggedProfileMenuLinks.xpath}[${i + 1}]`
                const itemText = await this.returnLocatorTextContent(page, currXpath)
                if (itemText === logout) {
                    logger.info(`Found logout option: ${logout}. Clicking on it.`)
                    await this.clickOnElement(page, currXpath)
                    break
                }
            }
        } catch (error) {
            logger.error(`Error during logout: ${error.message}`)
            throw new Error(`Error on clicking logout: ${error.message}`)
        }
    }
}