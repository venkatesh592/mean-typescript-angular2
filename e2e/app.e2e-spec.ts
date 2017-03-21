import { Angular2DummyPage } from './app.po';

describe('angular2-dummy App', () => {
  let page: Angular2DummyPage;

  beforeEach(() => {
    page = new Angular2DummyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
