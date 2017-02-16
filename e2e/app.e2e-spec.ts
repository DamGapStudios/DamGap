import { DamGapPage } from './app.po';

describe('dam-gap App', function() {
  let page: DamGapPage;

  beforeEach(() => {
    page = new DamGapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
