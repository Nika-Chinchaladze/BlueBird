import { Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class HomePage extends BasePage {
  // Locators
  public loginBtn: Locator = this.page.locator('a#desktopLogin');
  public chatBtn: Locator = this.page.locator('button#desktopChat');

  // Methods
  async verifyHomePage(): Promise<void> {
    this.assertions.verifyElementIsVisible(this.loginBtn);
    this.assertions.verifyElementIsVisible(this.chatBtn);
  }
}
