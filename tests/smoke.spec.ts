import { test, expect } from '@playwright/test';

test.describe('WebDevMY Landing Page Smoke Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Note: Assuming the dev server is running on localhost:4321
    await page.goto('http://localhost:4321');
  });

  test('should have the correct title and meta tags', async ({ page }) => {
    await expect(page).toHaveTitle(/WebDevMY/);
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toContain('Malaysian SMEs');
  });

  test('navbar should be visible and contain links', async ({ page }) => {
    const navbar = page.locator('nav');
    await expect(navbar).toBeVisible();
    await expect(page.locator('text=Portfolio')).toBeVisible();
    await expect(page.locator('text=Hubungi')).toBeVisible();
  });

  test('FAQ accordion should toggle correctly', async ({ page }) => {
    const firstFaq = page.locator('.faq-item').first();
    const question = firstFaq.locator('button');
    const answer = firstFaq.locator('.faq-answer');

    await expect(answer).toBeHidden();
    await question.click();
    await expect(answer).toBeVisible();
    await expect(question).toHaveAttribute('aria-expanded', 'true');
  });

  test('Contact form should have required fields', async ({ page }) => {
    const form = page.locator('form[name="contact"]');
    await expect(form.locator('input[name="name"]')).toHaveAttribute('required', '');
    await expect(form.locator('input[name="phone"]')).toHaveAttribute('required', '');
    await expect(form.locator('input[name="email"]')).toHaveAttribute('required', '');
    await expect(form.locator('select[name="service"]')).toHaveAttribute('required', '');
  });

  test('Exit popup should trigger on mouse out', async ({ page }) => {
    // Skip on mobile since it relies on mouseout
    const isMobile = await page.evaluate(() => 'ontouchstart' in window);
    if (isMobile) return;

    // Simulate mouse moving out of the viewport
    await page.mouse.move(200, 200);
    await page.mouse.move(200, 0); // Move to top to trigger exit intent

    const popup = page.locator('#exitIntentPopup');
    await expect(popup).toBeVisible();
  });
});
