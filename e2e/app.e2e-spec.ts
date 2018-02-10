import { BitcoinValuePage } from './app.po';

describe('bitcoin-value App', function() {
  let page: BitcoinValuePage;

  beforeEach(() => {
    page = new BitcoinValuePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
