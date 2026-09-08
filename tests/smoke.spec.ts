import { test, expect } from '@playwright/test';

test.describe('WebDevMY Landing Page Smoke & i18n Tests', () => {
  test('BM page (default route) should have correct metadata & language', async ({ page }) => {
    await page.goto('http://localhost:4321');
    await expect(page).toHaveTitle(/WebDevMY/);
    
    const htmlLang = await page.locator('html').getAttribute('lang');
    expect(htmlLang).toBe('ms');

    // Navbar checks
    const navbar = page.locator('nav');
    await expect(navbar).toBeVisible();
    await expect(page.locator('nav >> text=Portfolio').first()).toBeVisible();
    await expect(page.locator('nav >> text=Hubungi').first()).toBeVisible();

    // Language switcher presence
    const langSwitcher = page.locator('.language-switcher').first();
    await expect(langSwitcher).toBeVisible();
    await expect(page.locator('.language-switcher a[data-lang-target="ms"]').first()).toHaveAttribute('aria-current', 'true');
  });

  test('EN page (/en/) should have correct metadata & English translations', async ({ page }) => {
    await page.goto('http://localhost:4321/en/');
    await expect(page).toHaveTitle(/WebDevMY/);
    
    const htmlLang = await page.locator('html').getAttribute('lang');
    expect(htmlLang).toBe('en');

    // Navbar in English
    const navbar = page.locator('nav');
    await expect(navbar).toBeVisible();
    await expect(page.locator('nav >> text=Problems').first()).toBeVisible();
    await expect(page.locator('nav >> text=Solutions').first()).toBeVisible();
    await expect(page.locator('nav >> text=Pricing').first()).toBeVisible();
    await expect(page.locator('nav >> text=Contact').first()).toBeVisible();

    // Language switcher EN active
    await expect(page.locator('.language-switcher a[data-lang-target="en"]').first()).toHaveAttribute('aria-current', 'true');
  });

  test('FAQ accordion should toggle correctly', async ({ page }) => {
    await page.goto('http://localhost:4321');
    const firstFaq = page.locator('.faq-item').first();
    const question = firstFaq.locator('button');
    const answer = firstFaq.locator('.faq-answer');

    await expect(answer).toBeHidden();
    await question.click();
    await expect(answer).toBeVisible();
    await expect(question).toHaveAttribute('aria-expanded', 'true');
  });

  test('Exit popup should trigger on mouse out', async ({ page }) => {
    await page.goto('http://localhost:4321');
    const isMobile = await page.evaluate(() => 'ontouchstart' in window);
    if (isMobile) return;

    await page.mouse.move(200, 200);
    await page.mouse.move(200, 0);

    const popup = page.locator('#exitIntentPopup');
    await expect(popup).toBeVisible();
  });
});
