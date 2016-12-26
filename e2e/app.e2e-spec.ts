import { FreelanceProjectPage } from './app.po';

describe('freelance-project App', function() {
  let page: FreelanceProjectPage;

  beforeEach(() => {
    page = new FreelanceProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
