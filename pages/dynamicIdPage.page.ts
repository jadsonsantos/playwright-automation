import { type Page, type Locator } from '@playwright/test'

export class DynamicIdPage {
  // locators
  readonly page: Page;
  readonly dynamicIdTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dynamicIdTitle = page.locator('.container h3')
  }

  public async goto() {
    await this.page.goto('/dynamicid')
  }

  public async isDynamicIdTitlePresent() {
    await this.page.waitForLoadState('domcontentloaded')
    return this.dynamicIdTitle.isVisible()
  }
}

// Replicate what we did on DynamicId page with Class Attribute
