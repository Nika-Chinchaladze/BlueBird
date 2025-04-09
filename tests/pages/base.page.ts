import { Page } from '@playwright/test';
import { Actions } from '../helper/actions';
import { Assertions } from '../helper/assertions';
import { Waiters } from '../helper/waiters';

export class BasePage {
  public page: Page;
  public actions: Actions;
  public assertions: Assertions;
  public waiters: Waiters;
  public baseUrl: string = 'https://www.allianzdirect.nl/';

  constructor(page: Page) {
    this.page = page;
    this.actions = new Actions(page);
    this.assertions = new Assertions(page);
    this.waiters = new Waiters(page);
  }
}