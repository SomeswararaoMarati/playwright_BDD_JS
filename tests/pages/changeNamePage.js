import { expect } from '@playwright/test';

class ChangeNamePage {
  constructor(page) {
    this.page = page;
    this.editAccountLink = page.getByRole('link', { name: 'Edit your account information' });
    this.firstNameTxt = page.locator('#input-firstname');
    this.lastNameTxt = page.locator('#input-lastname');
    this.continueBtn = page.locator("input[value='Continue']");
    this.successMessageHeading = page.getByText(' Success: Your account has been successfully updated.');

  }


  async clickOnEditAccount() {
    await this.editAccountLink.click();
  }


  async enterFirstName(fname) {
    await this.firstNameTxt.fill(fname);
  }

  async enterLastName(lname) {
    await this.lastNameTxt.fill(lname);
  }

  async clickOnEditAccount() {
    await this.editAccountLink.click();
  }


  async clickOnContinueButton() {
    await this.continueBtn.click();
  }

  async verifySuccessMessage(message) {
    await expect(this.successMessageHeading).toBeVisible();
    await expect(this.successMessageHeading).toContainText(new RegExp(message));

  }
}

export { ChangeNamePage };
