import { Locator, Page } from '@playwright/test'

export class ClassAttributePage {
  readonly page: Page
  readonly classAttributeTitle: Locator

  constructor(page: Page) {
    this.page = page
    this.classAttributeTitle = page.locator('.container h3')
  }

  public async goto() {
    await this.page.goto('/classattr')
  }

  public async isClassAttributeTitlePresent() {
    await this.page.waitForLoadState('domcontentloaded')
    return this.classAttributeTitle.isVisible()
  }
}
