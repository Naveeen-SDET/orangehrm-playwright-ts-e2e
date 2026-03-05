import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";

test("@smoke login -> logout", async ({ page }) => {
  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);

  await login.goto();
  await login.login("Admin", "admin123");

  await dashboard.assertLoaded();

  await dashboard.logout();
});