import { Locator, Page } from '@playwright/test'

export class HiddenLayersPage {
  readonly page: Page
  readonly hiddenLayersTitle: Locator

  constructor(page: Page) {
    this.page = page
    this.hiddenLayersTitle = page.locator('.container h3')
  }

  public async goto() {
    await this.page.goto('/hiddenlayers')
  }

  public async isHiddenLayersTitlePresent() {
    await this.page.waitForLoadState('domcontentloaded')
    return this.hiddenLayersTitle.isVisible()
  }
}
