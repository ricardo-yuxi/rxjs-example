import { RxjsExamplePage } from './app.po';

describe('rxjs-example App', () => {
  let page: RxjsExamplePage;

  beforeEach(() => {
    page = new RxjsExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
