import { test, expect } from '@playwright/test'
import { ClassAttributePage } from '../pages/classAttribute.page'

test.describe('ClassAttribute Tests', () => {
  let classAttributePage: ClassAttributePage

  test.beforeEach(async ({ page }) => {
    classAttributePage = new ClassAttributePage(page)
    await classAttributePage.goto()
  })

  test('should navigate to class attribute page and verify title is present', async () => {
    const isTitlePresent =
      await classAttributePage.isClassAttributeTitlePresent()
    expect(isTitlePresent).toBeTruthy()
  })

  test('should verify page URL contains classattr', async ({ page }) => {
    await expect(page).toHaveURL(/.*classattr/)
  })

  test('should verify page title element is visible', async () => {
    await expect(classAttributePage.classAttributeTitle).toBeVisible()
  })
})
