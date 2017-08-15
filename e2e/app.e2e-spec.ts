import { GasthausGundelPage } from './app.po';

describe('gasthaus-gundel App', () => {
  let page: GasthausGundelPage;

  beforeEach(() => {
    page = new GasthausGundelPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
