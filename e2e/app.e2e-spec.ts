import { TheNimbleCoderPage } from './app.po';

describe('the-nimble-coder App', function() {
  let page: TheNimbleCoderPage;

  beforeEach(() => {
    page = new TheNimbleCoderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tnc works!');
  });
});
