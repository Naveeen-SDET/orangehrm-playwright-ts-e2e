import { Page, expect } from "@playwright/test";
import { selectors } from "../utils/selectors";

export class LoginPage {
  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto("/web/index.php/auth/login");
    await expect(this.page.locator(selectors.login.submit)).toBeVisible();
  }

  async login(username: string, password: string) {
    await this.page.locator(selectors.login.username).fill(username);
    await this.page.locator(selectors.login.password).fill(password);
    await this.page.locator(selectors.login.submit).click();
  }
}