import { Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  // Used Data
  public emailValue: string = 'elene@gmail.com';
  
  // Locators
  public emailInput: Locator = this.page.locator('input#login-form-email');
  public submitBtn: Locator = this.page.locator('button#continue');

  // Methods
  async verifyLoginPage(): Promise<void> {
    this.assertions.verifyElementIsVisible(this.emailInput);
    this.assertions.verifyElementIsVisible(this.submitBtn);
  }
}
