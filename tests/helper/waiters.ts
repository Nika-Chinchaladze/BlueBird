import { Locator } from '@playwright/test';
import { BaseHelp } from './base';

const TIME_OUT: number = 5000;

export class Waiters extends BaseHelp {
  async waitForSelector(element: Locator, amount: number = TIME_OUT): Promise<void> {
    await element.waitFor({ timeout: amount });
  }

  async waitForTimeOut(amount: number = TIME_OUT): Promise<void> {
    await this.page.waitForTimeout(amount);
  }

  async waitForUrl(url: string, amount: number = TIME_OUT): Promise<void> {
    await this.page.waitForURL(url, { timeout: amount });
  }
}