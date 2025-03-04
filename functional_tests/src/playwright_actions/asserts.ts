import { expect, Page } from "@playwright/test";
import logger from "../../../utils/logger";

export default class Asserts {

    public static async assertTitle(expectedTitle: string, page: Page) {
        try {
            await expect(page).toHaveTitle(expectedTitle);
        } catch (error) {
            logger.error(`Error in assertTitle: ${error.message}`);
            throw error;
        }
    }

    public static async assertTitleContains(expectedTitle: string, page: Page) {
        try {
            expect(await page.title()).toContain(expectedTitle);
        } catch (error) {
            logger.error(`Error in assertTitleContains: ${error.message}`);
            throw error;
        }
    }

    public static async assertValueContains(page: Page, locator: string, text: string) {
        try {
            expect(await page.locator(locator)).toContainText(text);
        } catch (error) {
            logger.error(`Error in assertValueContains: ${error.message}`);
            throw error;
        }
    }

    public static async getValueAttribute(page: Page, locator: string, text: string) {
        try {
            return await page.locator(locator).getAttribute('value')
        } catch (error) {
            logger.error(`Error in matching default value: ${error.message}`);
            throw error;
        }
    }

}
