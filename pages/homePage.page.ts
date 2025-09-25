import { type Page, type Locator } from 'playwright/test'

export class HomePage {
  // locators
  readonly page: Page;
  readonly dynamicIdLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dynamicIdLink = page.locator('#overview .row:nth-child(1) .col-sm:nth-child(1) a')
  }

  // methods
  async navigateToHomePage() {
    await this.page.goto('/');
  }

  async clickOnDynamicIdLink() {
    await this.dynamicIdLink.waitFor({state: 'attached'})
    await this.dynamicIdLink.waitFor({state: 'visible'})
    await this.dynamicIdLink.scrollIntoViewIfNeeded()
    await this.dynamicIdLink.click();
  }

  async clickOnLink(linkText: string) {
    await this.page.getByRole('link', { name: linkText }).click();
  }

  async getPageTitle() {
    return this.page.title();
  }
}
