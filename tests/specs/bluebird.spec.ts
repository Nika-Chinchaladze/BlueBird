import { test } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { LoginPage } from '../pages/login.page';
import { CookieWindow } from '../pages/windows/cookie.window';

const WAIT_3000 = 3000;

test.describe('Test BlueBird Web Application', async () => {
    test.beforeEach('close cookies window', async ({ page }) => {
        const homePage = new HomePage(page);
        const cookieWindow = new CookieWindow(page);
        // HomePage section
        await homePage.actions.navigateToUrl(homePage.baseUrl);
        await homePage.assertions.verifyPageUrl(homePage.baseUrl);
        // CookieWindow section
        await cookieWindow.verifyCookieWindow();
        await cookieWindow.actions.clickOnElement(cookieWindow.acceptBtn);
        await cookieWindow.assertions.verifyElementIsNotVisible(cookieWindow.window);
    });

    test('Login - negative scenario', { tag: ['@bluebird'] }, async ({ page }) => {
        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);
        // HomePage section
        await homePage.verifyHomePage();
        await homePage.assertions.verifyElementIsEnabled(homePage.loginBtn);
        await homePage.actions.clickOnElement(homePage.loginBtn);
        await homePage.waiters.waitForTimeOut(WAIT_3000);
        // LoginPage section
        await loginPage.verifyLoginPage();
        await loginPage.assertions.verifyElementIsEnabled(loginPage.submitBtn);
        await loginPage.actions.clickOnElement(loginPage.submitBtn);
        await loginPage.verifyLoginPage();
    });

    test('Login - positive scenario', { tag: ['@bluebird'] }, async ({ page }) => {
        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);
        // HomePage section
        await homePage.verifyHomePage();
        await homePage.assertions.verifyElementIsEnabled(homePage.loginBtn);
        await homePage.actions.clickOnElement(homePage.loginBtn);
        await homePage.waiters.waitForTimeOut(WAIT_3000);
        // LoginPage section
        await loginPage.verifyLoginPage();
        await loginPage.actions.setValueInField(loginPage.emailInput, loginPage.emailValue);
        await loginPage.assertions.verifyElementHaveValue(loginPage.emailInput, loginPage.emailValue);
        await loginPage.assertions.verifyElementIsEnabled(loginPage.submitBtn);
        await loginPage.actions.clickOnElement(loginPage.submitBtn);
        await loginPage.waiters.waitForTimeOut(WAIT_3000);
        // VerificationPage section
    });
});