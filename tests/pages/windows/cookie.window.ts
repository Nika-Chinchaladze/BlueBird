import { Locator } from '@playwright/test';
import { BasePage } from '../base.page';

export class CookieWindow extends BasePage {
  // Locators
  public window: Locator = this.page.locator('div#center-tile-banner-popup');
  public acceptBtn: Locator = this.page.locator('//button[text()="Cookies accepteren"]');
  public declineBtn: Locator = this.page.locator('//button[text()="Cookie-instellingen"]');

  // Methods
  async verifyCookieWindow(): Promise<void> {
    this.assertions.verifyElementIsVisible(this.window);
    this.assertions.verifyElementIsVisible(this.acceptBtn);
    this.assertions.verifyElementIsVisible(this.declineBtn);
  }
}
