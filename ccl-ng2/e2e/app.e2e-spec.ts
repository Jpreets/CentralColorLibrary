import { PhototypePage } from './app.po';

describe('phototype App', function() {
  let page: PhototypePage;

  beforeEach(() => {
    page = new PhototypePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
