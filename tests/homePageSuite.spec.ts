import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage.page";
import { DynamicIdPage } from '../pages/dynamicIdPage.page'
import { ClassAttributePage } from '../pages/classAttribute.page'
import { HiddenLayersPage } from '../pages/hiddenLayers.page'

let homePage: HomePage
let dynamicIdPage: DynamicIdPage
let classAttributePage: ClassAttributePage
let hiddenLayersPage: HiddenLayersPage

test.describe('Smoke Test Suite', { tag: '@smoke' }, () => {
  test.beforeEach(async ({ page }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 60_000 * 2)
    await page.goto('/', { waitUntil: 'load' })
    homePage = new HomePage(page)
    classAttributePage = new ClassAttributePage(page)
    hiddenLayersPage = new HiddenLayersPage(page)
    dynamicIdPage = new DynamicIdPage(page)
  })

  test(
    'Visit Dynamic ID Page Verification',
    { tag: ['@123'] },
    async ({ page }) => {
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
    }
  )

  test(
    'Visit Class Attribute Page Verification',
    { tag: ['@123'] },
    async ({ page }) => {
      await test.step('Verify Class Attribute Link is Existing', async () => {
        const isClassAttributeLinkExisting: Boolean =
          await homePage.isClassAttributeLinkExisting()
        expect(isClassAttributeLinkExisting).toBeTruthy()
      })
      await test.step('Click on Class Attribute Link', async () => {
        await homePage.clickOnClassAttributeLink()
      })
      await test.step('Is Class Attribute Page title present', async () => {
        const isClassAttributeTitlePresent: Boolean =
          await classAttributePage.isClassAttributeTitlePresent()
        expect(isClassAttributeTitlePresent).toBeTruthy()
      })
    }
  )

  test(
    'Visit Hidden Layers Page Verification',
    { tag: ['@123'] },
    async ({ page }) => {
      await test.step('Verify Hidden Layers Link is Existing', async () => {
        const isHiddenLayersLinkExisting: Boolean =
          await homePage.isHiddenLayersLinkExisting()
        expect(isHiddenLayersLinkExisting).toBeTruthy()
      })
      await test.step('Click on Hidden Layers Link', async () => {
        await homePage.clickOnHiddenLayersLink()
      })
      await test.step('Is Hidden Layers Page title present', async () => {
        const isHiddenLayersTitlePresent: Boolean =
          await hiddenLayersPage.isHiddenLayersTitlePresent()
        expect(isHiddenLayersTitlePresent).toBeTruthy()
      })
    }
  )
})
