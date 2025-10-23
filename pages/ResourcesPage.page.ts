import { Page } from '@playwright/test'

export class ResourcesPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async goto() {
    await this.page.goto('/resources')
  }
}
