import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage.page';

test.describe('HomePage Tests', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigateToHomePage();
  });

  test('should navigate to home page and verify title', async () => {
    const title = await homePage.getPageTitle();
    expect(title).toContain('UI Test Automation Playground');
  });

  test('should click on Dynamic ID link', async () => {
    await homePage.clickOnDynamicIdLink();
    await expect(homePage.page).toHaveURL(/.*dynamicid/);
  });

  test('should click on link by text', async () => {
    await homePage.clickOnLink('Dynamic ID');
    await expect(homePage.page).toHaveURL(/.*dynamicid/);
  });

  test('should click on element by selector', async () => {
    await homePage.clickBySelector('#overview .row:nth-child(1) .col-sm:nth-child(1) a');
    await expect(homePage.page).toHaveURL(/.*dynamicid/);
  });
});
