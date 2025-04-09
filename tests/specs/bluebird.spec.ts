import { test } from '../fixture/base.fixture';
import { Constant } from '../data/data.const';

test.describe('Test BlueBird Web Application', async () => {
    test.beforeEach('close cookies window', async ({ homePage, cookieWindow }) => {
        // HomePage section
        await homePage.actions.navigateToUrl(homePage.baseUrl);
        await homePage.waiters.waitForUrl(homePage.baseUrl);
        await homePage.assertions.verifyPageUrl(homePage.baseUrl);
        // CookieWindow section
        await cookieWindow.verifyCookieWindow();
        await cookieWindow.waiters.waitForSelector(cookieWindow.acceptBtn);
        await cookieWindow.actions.clickOnElement(cookieWindow.acceptBtn);
        await cookieWindow.assertions.verifyElementIsNotVisible(cookieWindow.window);
    });

    test('Login - negative scenario', { tag: ['@bluebird'] }, async ({ homePage, loginPage }) => {
        // HomePage section
        await homePage.verifyHomePage();
        await homePage.assertions.verifyElementIsEnabled(homePage.loginBtn);
        await homePage.actions.clickOnElement(homePage.loginBtn);
        await homePage.waiters.waitForTimeOut(Constant.wait3000);
        // LoginPage section
        await loginPage.verifyLoginPage();
        await loginPage.assertions.verifyElementIsEnabled(loginPage.submitBtn);
        await loginPage.actions.clickOnElement(loginPage.submitBtn);
        await loginPage.verifyLoginPage();
    });

    test('Login - positive scenario', { tag: ['@bluebird'] }, async ({ homePage, loginPage, verificationPage }) => {
        // HomePage section
        await homePage.verifyHomePage();
        await homePage.assertions.verifyElementIsEnabled(homePage.loginBtn);
        await homePage.actions.clickOnElement(homePage.loginBtn);
        await homePage.waiters.waitForTimeOut(Constant.wait3000);
        // LoginPage section
        await loginPage.verifyLoginPage();
        await loginPage.actions.setValueInField(loginPage.emailInput, loginPage.emailValue);
        await loginPage.assertions.verifyElementHaveValue(loginPage.emailInput, loginPage.emailValue);
        await loginPage.assertions.verifyElementIsEnabled(loginPage.submitBtn);
        await loginPage.actions.clickOnElement(loginPage.submitBtn);
        await loginPage.waiters.waitForTimeOut(Constant.wait3000);
        // VerificationPage section
        await verificationPage.verifyVerificationPage();
        await verificationPage.assertions.verifyElementHaveText(verificationPage.emailAddress, loginPage.emailValue);
    });
});
