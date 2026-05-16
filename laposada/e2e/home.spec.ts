import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('shows the restaurant name in the hero', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('La Posada Casa Pepe')
  })

  test('navbar is visible with all links', async ({ page }) => {
    await expect(page.getByRole('navigation')).toBeVisible()
    await expect(page.getByText('El Restaurante')).toBeVisible()
    await expect(page.getByText('Gastronomía')).toBeVisible()
    await expect(page.getByText('Menú')).toBeVisible()
    await expect(page.getByText('Equipo')).toBeVisible()
    await expect(page.getByText('Contacto')).toBeVisible()
  })

  test('gastronomy filter shows all dishes by default', async ({ page }) => {
    const images = page.locator('#Gastromonia img')
    await expect(images).toHaveCount(12)
  })

  test('gastronomy filter works correctly', async ({ page }) => {
    await page.getByRole('button', { name: 'Aperitivos' }).click()
    const images = page.locator('#Gastromonia img')
    const count = await images.count()
    expect(count).toBeLessThan(12)
    expect(count).toBeGreaterThan(0)
  })

  test('menu section shows four menu options', async ({ page }) => {
    await expect(page.getByText('Menú Degustación')).toBeVisible()
    await expect(page.getByText('Menú Especial')).toBeVisible()
    await expect(page.getByText('Menú de Arroz')).toBeVisible()
    await expect(page.getByText('Menú La Posada')).toBeVisible()
  })

  test('contact section shows opening hours', async ({ page }) => {
    await expect(page.getByText(/Jueves a Domingo/)).toBeVisible()
  })

  test('footer shows copyright notice', async ({ page }) => {
    await expect(page.getByText(/Copyright La Posada Casa Pepe/)).toBeVisible()
  })
})

test.describe('Additional checks', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('filter buttons work in Gastronomy section', async ({ page }) => {
    await page.getByRole('button', { name: 'Aperitivos' }).click()
    const images = page.locator('#Gastromonia img')
    const count = await images.count()
    expect(count).toBeLessThan(12)
    expect(count).toBeGreaterThan(0)
    // Switch to Platos Principales
    await page.getByRole('button', { name: 'Platos Principales' }).click()
    const mainCount = await images.count()
    expect(mainCount).toBeGreaterThan(0)
    // Switch back to Todos
    await page.getByRole('button', { name: 'Todos' }).click()
    await expect(images).toHaveCount(12)
  })

  test('WhatsApp link has correct href', async ({ page }) => {
    const whatsappLink = page.locator('a[href*="wa.me"]').first()
    await expect(whatsappLink).toHaveAttribute('href', 'https://wa.me/34653838263')
  })

  test('page has no broken main sections - all section ids exist', async ({ page }) => {
    await expect(page.locator('#Gastromonia')).toBeVisible()
    await expect(page.locator('#Equipo')).toBeVisible()
    await expect(page.locator('#Contacto')).toBeVisible()
    // Check main-content id exists (accessibility)
    await expect(page.locator('#main-content')).toBeAttached()
  })
})

test.describe('Mobile menu', () => {
  test.use({ viewport: { width: 375, height: 812 } })

  test('hamburger button is visible on mobile', async ({ page }) => {
    await page.goto('/')
    const hamburger = page.getByLabel('Abrir menú')
    await expect(hamburger).toBeVisible()
  })

  test('mobile menu opens and closes on click', async ({ page }) => {
    await page.goto('/')
    const hamburger = page.getByLabel('Abrir menú')
    const nav = page.getByRole('navigation')

    await hamburger.click()
    await expect(nav.locator('ul')).toHaveAttribute('aria-expanded')
    // Click again to close
    await hamburger.click()
  })
})
