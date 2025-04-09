import { Locator, expect } from '@playwright/test';
import { BaseHelp } from './base';

const TIME_OUT: number = 5000;

export class Assertions extends BaseHelp {
    async verifyPageUrl(pageUrl: string, timeout: number = TIME_OUT): Promise<void> {
        await expect(this.page).toHaveURL(pageUrl, { timeout });
    }

    async verifyPageTitle(titleName: string, timeout: number = TIME_OUT): Promise<void> {
        await expect(this.page).toHaveTitle(titleName, { timeout });
    }
    
    async verifyElementIsVisible(element: Locator): Promise<void> {
        await expect(element).toBeVisible();
    }

    async verifyElementIsNotVisible(element: Locator, timeout: number = TIME_OUT): Promise<void> {
        await expect(element).not.toBeVisible({ timeout });
    }

    async verifyElementIsEnabled(element: Locator, timeout: number = TIME_OUT): Promise<void> {
        await expect(element).toBeEnabled({ timeout });
    }

    async verifyElementIsDisabled(element: Locator, timeout: number = TIME_OUT): Promise<void> {
        await expect(element).not.toBeEnabled({ timeout });
    }

    async verifyElementHaveText(element: Locator, text: string, timeout: number = TIME_OUT): Promise<void> {
        await expect(element).toHaveText(text, { timeout });
    }

    async verifyElementHaveValue(element: Locator, value: string, timeout: number = TIME_OUT): Promise<void> {
        await expect(element).toHaveValue(value, { timeout });
    }
}