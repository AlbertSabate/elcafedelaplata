import { ElcafedelaplataPage } from './app.po';

describe('elcafedelaplata App', () => {
  let page: ElcafedelaplataPage;

  beforeEach(() => {
    page = new ElcafedelaplataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
