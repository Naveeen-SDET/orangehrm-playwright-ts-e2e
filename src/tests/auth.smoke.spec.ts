import { env } from "../config/env";
import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";

test("@smoke OrangeHRM login -> dashboard", async ({ page }) => {
  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);

  await login.goto();
  console.log("DEBUG ENV:", env.username, env.password);
  await login.login(env.username, env.password);
  await dashboard.assertLoaded();
});