import { Locator } from '@playwright/test';
import { BaseHelp } from './base';
import { Constant } from '../data/data.const';

export class Waiters extends BaseHelp {
  async waitForSelector(element: Locator, amount: number = Constant.wait5000): Promise<void> {
    await element.waitFor({ timeout: amount });
  }

  async waitForTimeOut(amount: number = Constant.wait5000): Promise<void> {
    await this.page.waitForTimeout(amount);
  }

  async waitForUrl(url: string, amount: number = Constant.wait5000): Promise<void> {
    await this.page.waitForURL(url, { timeout: amount });
  }
}