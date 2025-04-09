import { test as base, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { LoginPage } from '../pages/login.page';
import { VerificationPage } from '../pages/verification.page';
import { CookieWindow } from '../pages/windows/cookie.window';

type MyFixtures = {
  homePage: HomePage,
  loginPage: LoginPage,
  verificationPage: VerificationPage,
  cookieWindow: CookieWindow,
};

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  verificationPage: async ({ page }, use) => {
    await use(new VerificationPage(page));
  },
  cookieWindow: async ({ page }, use) => {
    await use(new CookieWindow(page));
  },
});

export { expect } from '@playwright/test';
