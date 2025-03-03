import { expect, Page } from "@playwright/test";

export default class Asserts {

    public static async assertTitle(title: string, page: Page) {
        try {
            await expect(page).toHaveTitle(title);
        } catch (error) {
            console.error(`Error in assertTitle: ${error.message}`);
            throw error;
        }
    }

    public static async assertTitleContains(title: string, page: Page) {
        try {
            expect(await page.title()).toContain(title);
        } catch (error) {
            console.error(`Error in assertTitleContains: ${error.message}`);
            throw error;
        }
    }

    public static async assertValueContains(page: Page, locator: string, text: string) {
        try {
            expect(await page.locator(locator)).toContainText(text);
        } catch (error) {
            console.error(`Error in assertValueContains: ${error.message}`);
            throw error;
        }
    }

    public static async getValueAttribute(page: Page, locator: string, text: string) {
        try {
            return await page.locator(locator).getAttribute('value')
        } catch (error) {
            console.error(`Error in matching default value: ${error.message}`);
            throw error;
        }
    }

}
