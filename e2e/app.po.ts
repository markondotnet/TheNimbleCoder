import { browser, element, by } from 'protractor';

export class TheNimbleCoderPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tnc-root h1')).getText();
  }
}
