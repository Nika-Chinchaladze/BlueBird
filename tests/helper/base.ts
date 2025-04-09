import { expect, Page, Locator } from '@playwright/test';
import { Constant } from '../data/data.const';

export class BaseHelp {
  public page;

  constructor(page: Page) {
    this.page = page;
  }

  async elementIsReady(element: Locator, timeout: number = Constant.wait5000): Promise<void> {
    await expect(element).toBeVisible({ timeout });
    await expect(element).toBeEnabled();
  }
}