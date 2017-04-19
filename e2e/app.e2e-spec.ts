import { Demo0419Page } from './app.po';

describe('demo0419 App', () => {
  let page: Demo0419Page;

  beforeEach(() => {
    page = new Demo0419Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
