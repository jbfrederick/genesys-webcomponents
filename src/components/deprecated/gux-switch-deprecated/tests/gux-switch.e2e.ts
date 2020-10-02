import { newE2EPage } from '@stencil/core/testing';

describe('gux-switch', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<gux-switch-deprecated></gux-switch-deprecated>');
    const element = await page.find('gux-switch-deprecated');
    expect(element).toHaveClass('hydrated');
  });
});
