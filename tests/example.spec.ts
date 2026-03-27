import { test, expect } from '@playwright/test';

const URL = 'https://natalyastclair.vercel.app';

test('site is alive', async ({ page }) => {
  const response = await page.goto(URL);
  expect(response?.status()).toBeLessThan(400);
});

test('hero text renders', async ({ page }) => {
  await page.goto(URL);
  await expect(page.locator('h1.heading')).toContainText('Natalya St. Clair');
  await expect(page.locator('h2.heading').first()).toContainText('QA Lead');
  await expect(page.getByText('making something complex feel clear')).toBeVisible();
});

test('projects section renders', async ({ page }) => {
  await page.goto(URL);
  const cards = page.locator('.project-card-body');
  expect(await cards.count()).toBeGreaterThan(0);
  await expect(page.locator('.project-card-body h3').first()).toBeVisible();
});

test('nav links are present', async ({ page }) => {
  await page.goto(URL);
  await expect(page.locator('a.nav-link[href="/"]')).toBeVisible();
  await expect(page.locator('a.nav-link[href="/about"]')).toBeVisible();
  await expect(page.locator('a.nav-link[href="/project"]')).toBeVisible();
  await expect(page.locator('a.nav-link[href="/resume"]')).toBeVisible();
  await expect(page.locator('a.nav-link[href="/recommendations"]')).toBeVisible();
});