import { expect } from "@playwright/test";

class LoginPage {
  constructor(page) {
    this.page = page;
    this.myAccount_Btn = page.getByRole("button", { name: "My account" });
    this.email_text = page.getByPlaceholder("E-Mail Address");
    this.password_text = page.getByPlaceholder("Password");
    this.submit_btn = page.locator('input[value="Login"]');
  }

  async navigateToUrl(url) {
    await this.page.goto(url);
  }

  async clickOnMyAccount() {
    await this.myAccount_Btn.click();
  }

  async loginToApplication(username, password) {
    await this.email_text.fill(username);
    await this.password_text.fill(password);
    await this.submit_btn.click();
  }

  async enterEmail(email) {
    await this.email_text.fill(email);
  }

  async enterPassword(password) {
    await this.password_text.fill(password);
  }

  async clickOnSubmitButton() {
    await this.submit_btn.click();
  }

  async verifyUserLandsOnAccountPage(logged_url) {
    await expect(this.page).toHaveURL(new RegExp(logged_url));
  }
}

export { LoginPage };
