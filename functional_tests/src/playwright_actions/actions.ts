import { Page } from "@playwright/test"
import Asserts from "./asserts"

class PlaywrightActions {

    async getPageTitle(page: Page) {
        try {
            await page.waitForLoadState('load')
            await page.waitForTimeout(3000)
            let title = await page.title()
            return title
        } catch(err) {
            throw new Error(`Failed to retrieve page title: ${err.message}`)
        }
    }

    async printTextContent(page: Page, locator: string, message: string) {
        console.log(message+": "+await page.locator(locator).textContent())
    }

    async goToUrl(page: Page, url: string) {
        try {
            await page.goto(url)
        } catch(err) {
            throw new Error(`Failed to navigate to ${url}: ${err.message}`)
        }
    }

    async clickOnElement(page: Page, locatorPath: string) {
        try {
            await page.locator(locatorPath).click()
        } catch(err) {
            throw new Error(`Failed to click on element with locator: ${locatorPath}. Error: ${err.message}`)
        }
    }

    async isElementVisible(page: Page, xpath: string) {
        try {
            await page.waitForSelector(xpath, { state: 'visible' })
            const isVisible = await page.locator(xpath).isVisible()
            return isVisible
        } catch(err) {
            throw new Error(`Failed while finding element with xpath of: ${xpath}. Error: ${err.message}`)
        }
    }

    async fillValueForTextField(page: Page, locatorPath: string, text: string | number) {
        try {
            const value = String(text)
            await page.locator(locatorPath).fill(value)
        } catch(err) {
            throw new Error(`Failed to fill value in element with locator: ${locatorPath}. Error: ${err.message}`)
        }
    }

    async fillDropDownByValue(page: Page, locatorPath: string, text: string) {
        try {
            await page.locator(locatorPath).selectOption({label: text})
        } catch(err) {
            throw new Error(`Failed to select value in element with locator: ${locatorPath}. Error: ${err.message}`)
        }
    }
}

export default PlaywrightActions
