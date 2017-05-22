import { Assignments2SolutionPage } from './app.po';

describe('assignments2-solution App', () => {
  let page: Assignments2SolutionPage;

  beforeEach(() => {
    page = new Assignments2SolutionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
