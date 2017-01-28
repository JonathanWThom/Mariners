import { MarinersPage } from './app.po';

describe('mariners App', function() {
  let page: MarinersPage;

  beforeEach(() => {
    page = new MarinersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
