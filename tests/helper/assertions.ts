import { Locator, expect } from '@playwright/test';
import { BaseHelp } from './base';
import { Constant } from '../data/data.const';

export class Assertions extends BaseHelp {
    async verifyPageUrl(pageUrl: string, timeout: number = Constant.wait5000): Promise<void> {
        await expect(this.page).toHaveURL(pageUrl, { timeout });
    }
    
    async verifyElementIsVisible(element: Locator, timeout: number = Constant.wait5000): Promise<void> {
        await expect(element).toBeVisible({ timeout });
    }

    async verifyElementIsNotVisible(element: Locator, timeout: number = Constant.wait5000): Promise<void> {
        await expect(element).not.toBeVisible({ timeout });
    }

    async verifyElementIsEnabled(element: Locator, timeout: number = Constant.wait5000): Promise<void> {
        await expect(element).toBeEnabled({ timeout });
    }

    async verifyElementHaveText(element: Locator, text: string, timeout: number = Constant.wait5000): Promise<void> {
        await expect(element).toContainText(text, { timeout });
    }

    async verifyElementHaveValue(element: Locator, value: string, timeout: number = Constant.wait5000): Promise<void> {
        await expect(element).toHaveValue(value, { timeout });
    }
}