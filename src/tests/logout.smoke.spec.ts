import { env } from "../config/env";
import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";

test("@smoke login -> logout", async ({ page }) => {
  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);

  await login.goto();
  await login.login(env.username, env.password);

  await dashboard.assertLoaded();

  await dashboard.logout();
});