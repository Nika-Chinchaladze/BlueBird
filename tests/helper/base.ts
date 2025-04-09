import { expect, Page, Locator } from '@playwright/test';

export class BaseHelp {
  public page;

  constructor(page: Page) {
    this.page = page;
  }

  async elementIsReady(element: Locator): Promise<void> {
    await expect(element).toBeVisible();
    await expect(element).toBeEnabled();
  }
}