import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage.page";
import { DynamicIdPage } from '../pages/dynamicIdPage.page'
let homePage: HomePage
let dynamicIdPage: DynamicIdPage

test.describe('Smoke Test Suite', { tag: '@smoke' }, () => {
  test.beforeEach(async ({ page }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 60_000 * 2)
    await page.goto('/', { waitUntil: 'load' })
    homePage = new HomePage(page)
    dynamicIdPage = new DynamicIdPage(page)
  })

  test('Visit Home Page Verification', { tag: ['@123'] }, async ({ page }) => {
    await test.step('Verify Dynamic Link is Existing', async () => {
      const isDynamicLinkExistingResult: Boolean =
        await homePage.isDynamicLinkExisting()
      expect(isDynamicLinkExistingResult).toBeTruthy()
    })
    await test.step('Click on Dynamic Link', async () => {
      await homePage.clickOnDynamicLink()
    })
    await test.step('Is Dynamic Id Page title present', async () => {
      const isDynamicIdTitlePresent: Boolean =
        await dynamicIdPage.isDynamicIdTitlePresent()
      expect(isDynamicIdTitlePresent).toBeTruthy()
    })
  })
})
