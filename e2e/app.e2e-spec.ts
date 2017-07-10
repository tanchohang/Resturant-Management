import { ResturantManagementPage } from './app.po';

describe('resturant-management App', () => {
  let page: ResturantManagementPage;

  beforeEach(() => {
    page = new ResturantManagementPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
