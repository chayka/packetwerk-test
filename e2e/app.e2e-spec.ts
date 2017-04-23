import { PacketwerkTestPage } from './app.po';

describe('packetwerk-test App', () => {
  let page: PacketwerkTestPage;

  beforeEach(() => {
    page = new PacketwerkTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
