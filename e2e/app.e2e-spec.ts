import { AppPage } from './app.po';

describe('garciaericn App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Eric N. Garcia');
  });
});
