import { Locator } from '@playwright/test';
import { BaseHelp } from './base';

export class Actions extends BaseHelp {
  async navigateToUrl(url: string): Promise<void> {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  }

  async clickOnElement(element: Locator): Promise<void> {
    this.elementIsReady(element);
    await element.click();
  }

  async setValueInField(element: Locator, text: string): Promise<void> {
    this.elementIsReady(element);
    await element.fill('');
    await element.fill(text);
  }
}