import { Page } from "@playwright/test"
import Asserts from "./asserts"
import logger from "../../../utils/logger"

class PlaywrightActions {

    async getPageTitle(page: Page) {
        try {
            await page.waitForLoadState('load')
            await page.waitForTimeout(3000)
            let title = await page.title()
            return title
        } catch(err) {
            logger.error(`Failed to retrieve page title: ${err.message}`)
        }
    }

    async printTextContent(page: Page, locator: string, message: string) {
        try {
            const content = await page.locator(locator).textContent()
            console.log(message + ": " + content)
        } catch (err) {
            logger.error(`Failed to print text content for locator ${locator}: ${err.message}`)
        }
    }

    async returnLocatorTextContent(page: Page, locator: string)  {
        try {
            return await page.locator(locator).textContent()
        } catch (err) {
            logger.error(`Failed to retrieve text content for locator: ${locator}. Error: ${err.message}`)
        }
    }

    async goToUrl(page: Page, url: string) {
        try {
            await page.goto(url, { waitUntil: 'domcontentloaded' })
        } catch (err) {
            logger.error(`Failed to navigate to ${url}: ${err.message}`)
        }
    }

    async clickOnElement(page: Page, locatorPath: string) {
        try {
            await page.locator(locatorPath).click()
        } catch (err) {
            logger.error(`Failed to click on element with locator: ${locatorPath}. Error: ${err.message}`)
        }
    }

    async checkBox(page: Page, locatorPath: string) {
        try {
            await page.locator(locatorPath).check()
        } catch (err) {
            logger.error(`Failed to check on element with locator: ${locatorPath}. Error: ${err.message}`)
        }
    }

    async isElementVisible(page: Page, xpath: string) {
        try {
            await page.waitForSelector(xpath, { state: 'visible' })
            const isVisible = await page.locator(xpath).isVisible()
            return isVisible
        } catch (err) {
            logger.error(`Failed while finding element with xpath of: ${xpath}. Error: ${err.message}`)
        }
    }

    async getLocatorsCount(page: Page, xpath: string) {
        try {
            await page.waitForSelector(xpath, { state: 'visible' })
            const values = (await page.$$(xpath)).length
            return values
        } catch (err) {
            logger.error(`Failed while finding element with xpath of: ${xpath}. Error: ${err.message}`)
        }
    }

    async fillValueForTextField(page: Page, locatorPath: string, text: string | number) {
        try {
            const value = String(text)
            await page.locator(locatorPath).fill(value)
        } catch (err) {
            logger.error(`Failed to fill value in element with locator: ${locatorPath}. Error: ${err.message}`)
        }
    }

    async fillDropDownByValue(page: Page, locatorPath: string, text: string) {
        try {
            await page.locator(locatorPath).selectOption({ label: text })
        } catch (err) {
            logger.error(`Failed to select value in element with locator: ${locatorPath}. Error: ${err.message}`)
        }
    }
}

export default PlaywrightActions
