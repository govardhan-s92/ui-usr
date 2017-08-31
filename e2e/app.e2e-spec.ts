import { IhubPage } from './app.po';

describe('ihub App', () => {
  let page: IhubPage;

  beforeEach(() => {
    page = new IhubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
