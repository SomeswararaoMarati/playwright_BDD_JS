import { createBdd } from "playwright-bdd";
import { test } from "../fixtures/fixtures";
const { Given, When, Then } = createBdd(test);


When('I click on Edit your account information', async ({changeNamePage}) => {
    await changeNamePage.clickOnEditAccount();    
});

When('I change first name to {string}', async ({changeNamePage}, fname) => {
    await console.log(`====>${fname}`)
    await changeNamePage.enterFirstName(fname)  

});

When('I change last name to {string}', async ({changeNamePage}, lname) => {
    await console.log(`====>${lname}`)
    await changeNamePage.enterLastName(lname);    
});

When('I click on Continue button', async ({changeNamePage}) => {
    await changeNamePage.clickOnContinueButton();  
});

Then('I should see the success message {string}', async ({ changeNamePage }, message) => {
    await changeNamePage.verifySuccessMessage(message)
});

