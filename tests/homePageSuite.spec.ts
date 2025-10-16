import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage.page";
let homePage: HomePage;

test.describe("Home Page Suite", async () => {
  test("Verify Home Page is loaded", async ({ page }) => {
    homePage = new HomePage(page);

    await test.step("Visit Home Page", async () => {
      await homePage.navigateToHomePage();
    });

    await test.step('Verify page is loaded', async () => {
      await expect(page).toHaveTitle(/UI Test Automation Playground/);
    });

    await test.step("Verify Dynamic ID Element is Existing", async () => {
      await expect(homePage.dynamicIdLink).toBeVisible({timeout: 5000});
    });

    await test.step("Click Dynamic ID Element", async () => {
      await homePage.clickOnDynamicIdLink();
    });
  });
});
