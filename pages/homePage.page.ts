import { type Page, type Locator } from '@playwright/test'

export class HomePage {
  // locators
  readonly page: Page;
  readonly dynamicIdLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dynamicIdLink = page.getByRole('link', { name: 'Dynamic ID' })
  }

  // methods
  async navigateToHomePage() {
    await this.page.goto('/');
  }

  async goto(url: string) {
    await this.page.goto(url);
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

  async clickBySelector(selector: string) {
    await this.page.locator(selector).click();
  }
}
