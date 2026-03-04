import { Page, expect } from "@playwright/test";
import { selectors } from "../utils/selectors";

export class DashboardPage {
  constructor(private readonly page: Page) {}

  async assertLoaded() {
    await expect(this.page).toHaveURL(/\/dashboard\/index/i);
    await expect(this.page.locator(selectors.dashboard.heading)).toBeVisible();
  }

  async openUserMenu() {
    await this.page.locator(selectors.dashboard.userMenu).click();
  }

  async logout() {
    await this.openUserMenu();
    await this.page.locator(selectors.dashboard.logout).click();
    await expect(this.page.locator(selectors.login.submit)).toBeVisible();
  }
}