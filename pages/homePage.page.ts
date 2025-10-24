import { type Page, type Locator } from '@playwright/test'

export class HomePage {
  // locators
  readonly page: Page
  readonly dynamicIdLink: Locator
  readonly classAttributeLink: Locator
  readonly hiddenLayersLink: Locator

  constructor(page: Page) {
    this.page = page
    this.dynamicIdLink = page.getByRole('link', { name: 'Dynamic ID' })
    this.classAttributeLink = page.getByRole('link', {
      name: 'Class Attribute',
    })
    this.hiddenLayersLink = page.getByRole('link', {
      name: 'Hidden Layers',
    })
  }

  // methods
  async navigateToHomePage() {
    await this.page.goto('/')
  }

  async goto(url: string) {
    await this.page.goto(url)
  }

  public async clickOnDynamicLink() {
    await this.dynamicIdLink.waitFor({ state: 'attached' })
    await this.dynamicIdLink.waitFor({ state: 'visible' })
    await this.dynamicIdLink.scrollIntoViewIfNeeded()
    await this.dynamicIdLink.click()
  }

  public async clickOnClassAttributeLink() {
    await this.classAttributeLink.waitFor({ state: 'attached' })
    await this.classAttributeLink.waitFor({ state: 'visible' })
    await this.classAttributeLink.scrollIntoViewIfNeeded()
    await this.classAttributeLink.click()
  }

  public async clickOnHiddenLayersLink() {
    await this.hiddenLayersLink.waitFor({ state: 'attached' })
    await this.hiddenLayersLink.waitFor({ state: 'visible' })
    await this.hiddenLayersLink.scrollIntoViewIfNeeded()
    await this.hiddenLayersLink.click()
  }

  async clickOnLink(linkText: string) {
    await this.page.getByRole('link', { name: linkText }).click()
  }

  async getPageTitle() {
    return this.page.title()
  }

  async clickBySelector(selector: string) {
    await this.page.locator(selector).click()
  }

  public async isDynamicLinkExisting() {
    return await this.dynamicIdLink.isVisible()
  }

  public async isClassAttributeLinkExisting() {
    return await this.classAttributeLink.isVisible()
  }

  public async isHiddenLayersLinkExisting() {
    return await this.hiddenLayersLink.isVisible()
  }
}
