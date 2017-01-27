import { WtswebappPage } from './app.po';

describe('wtswebapp App', function() {
  let page: WtswebappPage;

  beforeEach(() => {
    page = new WtswebappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
