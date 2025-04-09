import { Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class VerificationPage extends BasePage {
  // Locators
  public title: Locator = this.page.locator('p.title');
  public emailAddress: Locator = this.page.locator('p[class*="label noFlagContent ng-star-inserted"]');
  public smsBtn: Locator = this.page.locator('button#mfa-form-send-sms');
  public emailBtn: Locator = this.page.locator('button#mfa-form-send-email');

  // Methods
  async verifyVerificationPage(): Promise<void> {
    this.assertions.verifyElementIsVisible(this.title);
    this.assertions.verifyElementIsVisible(this.emailAddress);
    this.assertions.verifyElementIsVisible(this.smsBtn);
    this.assertions.verifyElementIsVisible(this.emailBtn);
  }
}
