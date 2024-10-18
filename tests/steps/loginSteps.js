// import {expect } from '@playwright/test';
import { createBdd } from "playwright-bdd";
import { test } from "../fixtures/fixtures";
const { Given, When, Then } = createBdd(test);

Given("I navigate to {string}", async ({ loginPage }, url) => {
  await loginPage.navigateToUrl(url);
});

Given("I click on My account", async ({ loginPage }) => {
  await loginPage.myAccount_Btn.click();
});

Given("I enter E-Mail Address {string}", async ({ loginPage }, email_address) => {
    await loginPage.enterEmail(email_address);
});

Given("I enter password {string}", async ({ loginPage }, password) => {
  await loginPage.enterPassword(password);
});

Given("I click on submit button", async ({ loginPage }) => {
  await loginPage.clickOnSubmitButton();
});

Then('I should verify url contains {string}', async ({loginPage}, url) => {
  loginPage.verifyUserLandsOnAccountPage(url)
});
