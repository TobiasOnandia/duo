import { test } from '@playwright/test';

test('Add item to Cart', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('div').filter({ hasText: 'Essence Mascara Lash Princess' }).getByRole('link').click();
  await page.locator('section').filter({ hasText: /^0$/ }).getByRole('button').nth(1).click();
  await page.getByRole('button', { name: 'Comprar' }).click();
  await page.getByRole('button', { name: 'Eliminar' }).click();
});

test('Filter by category', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByText('beauty').click();
  await page.getByText('fragrances').click();
  await page.getByText('furniture').click();
  await page.getByText('groceries').click();
});


test('Search by name', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByPlaceholder('Buscar productos...').fill('b');
  await page.goto('http://localhost:3000/?category=groceries&search=b');
  await page.getByPlaceholder('Buscar productos...').fill('be');
  await page.goto('http://localhost:3000/?category=groceries&search=be');
  await page.getByPlaceholder('Buscar productos...').fill('bee');
  await page.goto('http://localhost:3000/?category=groceries&search=bee');
  await page.getByPlaceholder('Buscar productos...').fill('beeg');
  await page.goto('http://localhost:3000/?category=groceries&search=beeg');
  await page.getByPlaceholder('Buscar productos...').fill('bee');
  await page.goto('http://localhost:3000/?category=groceries&search=bee');
  await page.getByPlaceholder('Buscar productos...').fill('beef');
  await page.goto('http://localhost:3000/?category=groceries&search=beef');
  await page.getByPlaceholder('Buscar productos...').fill('bee');
  await page.goto('http://localhost:3000/?category=groceries&search=bee');
  await page.getByPlaceholder('Buscar productos...').fill('be');
  await page.goto('http://localhost:3000/?category=groceries&search=be');
  await page.getByPlaceholder('Buscar productos...').fill('b');
  await page.goto('http://localhost:3000/?category=groceries&search=b');
  await page.getByPlaceholder('Buscar productos...').fill('');
  await page.goto('http://localhost:3000/?category=groceries');
  await page.locator('div').filter({ hasText: 'Dog Food$10.99Specially' }).getByRole('button').click();
  await page.locator('div').filter({ hasText: 'Eggs$2.99Fresh eggs, a' }).getByRole('button').click();
});


test('Navigate Simple', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Ir a la tienda' }).click();
  await page.getByRole('link', { name: 'Comprar Ahora' }).click();
  await page.getByRole('link', { name: 'Iniciar Sesión' }).click();
  await page.getByTestId('logo').click();
  await page.getByRole('link', { name: 'Inicio' }).click();
  await page.getByRole('link', { name: 'Productos' }).click();
  await page.getByRole('link', { name: 'Nosotros' }).click();
});

test('complete purchase', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('div').filter({ hasText: 'Eyeshadow Palette with Mirror' }).getByRole('link').click();
  await page.locator('section').filter({ hasText: /^0$/ }).getByRole('button').nth(1).click();
  await page.getByRole('button', { name: 'Comprar' }).click();
  await page.getByRole('link', { name: 'Comprar Ahora' }).click();
  await page.getByPlaceholder('Ingresa tu nombre completo').click();
  await page.getByPlaceholder('Ingresa tu nombre completo').fill('tobiasonandia');
  await page.getByPlaceholder('Ingresa tu nombre completo').press('Tab');
  await page.getByPlaceholder('Ingresa tu correo electrónico').fill('tobiasonandia0@gmail.com');
  await page.getByPlaceholder('Ingresa tu correo electrónico').press('Tab');
  await page.getByPlaceholder('Ingresa la calle y número').fill('floriciel perez 712');
  await page.getByPlaceholder('Ingresa la calle y número').press('Tab');
  await page.getByPlaceholder('Ingresa la ciudad').fill('Santa Rosa');
  await page.getByPlaceholder('Ingresa la ciudad').press('Tab');
  await page.getByPlaceholder('Ingresa su Provincia').fill('La Pampa');
  await page.getByPlaceholder('Ingresa su Provincia').press('Tab');
  await page.getByPlaceholder('Ingresa el código postal').fill('6300');
  await page.getByPlaceholder('Ingresa el código postal').press('Tab');
  await page.getByPlaceholder('Ingresa tu teléfono').fill('2954526316');
  await page.getByRole('link', { name: 'Iniciar Sesión' }).click();
});



test('Login', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByLabel('Perfil de usuario').click();
  await page.getByPlaceholder('ejemplo@correo.com').click();
  await page.getByPlaceholder('ejemplo@correo.com').fill('tobiasonandia2@gmail.com');
  await page.getByPlaceholder('ejemplo@correo.com').press('Tab');
  await page.getByPlaceholder('******').fill('15474511');
  await page.getByText('Recordarme').click();
  await page.getByRole('button', { name: 'Iniciar Sesión', exact: true }).click();
});

test('Delete items from Cart', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.locator('div').filter({ hasText: 'Essence Mascara Lash Princess' }).getByRole('button').click();
  await page.getByLabel('Notifications alt+T').getByRole('listitem').click();
  await page.getByRole('link', { name: 'Ir a la tienda' }).click();
  await page.getByRole('main').getByRole('button').nth(2).click();
  await page.getByRole('main').getByRole('button').nth(2).click();
  await page.getByRole('main').getByRole('button').nth(2).click();
  await page.getByRole('main').getByRole('button').nth(2).click();
  await page.getByRole('button', { name: 'Vaciar' }).click();
});


test('Delete item from Cart', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('div').filter({ hasText: 'Essence Mascara Lash Princess' }).getByRole('button').click();
  await page.getByLabel('Notifications alt+T').getByRole('listitem').click();
  await page.getByRole('link', { name: 'Ir a la tienda' }).click();
  await page.getByRole('main').getByRole('button').nth(2).click();
  await page.getByRole('main').getByRole('button').nth(2).click();
  await page.getByRole('main').getByRole('button').nth(2).click();
  await page.getByRole('main').getByRole('button').nth(2).click();
  await page.getByRole('button', { name: 'Vaciar' }).click();
  await page.locator('div').filter({ hasText: 'Essence Mascara Lash Princess' }).getByRole('button').click();
  await page.getByRole('link', { name: 'Ir a la tienda' }).click();
  await page.getByRole('main').getByRole('button').nth(2).click();
  await page.getByRole('main').getByRole('button').nth(2).click();
  await page.getByRole('main').getByRole('button').nth(2).click();
  await page.getByRole('main').getByRole('button').nth(2).click();
  await page.getByRole('main').getByRole('button').nth(2).click();
  await page.getByRole('main').getByRole('button').nth(2).click();
  await page.getByRole('main').getByRole('button').nth(2).click();
  await page.getByRole('button', { name: 'Eliminar' }).click();
});


test('Purchase', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('div').filter({ hasText: 'Essence Mascara Lash Princess' }).getByRole('button').click();
  await page.getByLabel('Notifications alt+T').getByRole('listitem').click();
  await page.getByRole('link', { name: 'Ir a la tienda' }).click();
  await page.getByRole('main').getByRole('button').nth(2).click();
  await page.getByRole('main').getByRole('button').nth(2).click();
  await page.getByRole('main').getByRole('button').nth(2).click();
  await page.getByRole('main').getByRole('button').nth(2).click();
  await page.getByRole('button', { name: 'Vaciar' }).click();
  await page.locator('div').filter({ hasText: 'Essence Mascara Lash Princess' }).getByRole('button').click();
  await page.getByRole('link', { name: 'Ir a la tienda' }).click();
  await page.getByRole('main').getByRole('button').nth(2).click();
  await page.getByRole('main').getByRole('button').nth(2).click();
  await page.getByRole('main').getByRole('button').nth(2).click();
  await page.getByRole('main').getByRole('button').nth(2).click();
  await page.getByRole('main').getByRole('button').nth(2).click();
  await page.getByRole('main').getByRole('button').nth(2).click();
  await page.getByRole('main').getByRole('button').nth(2).click();
  await page.getByRole('button', { name: 'Eliminar' }).click();
  await page.locator('div').filter({ hasText: 'Eyeshadow Palette with Mirror' }).getByRole('link').click();
  await page.locator('section').filter({ hasText: /^0$/ }).getByRole('button').nth(1).click();
  await page.getByRole('button', { name: 'XL' }).click();
  await page.getByRole('button', { name: 'Comprar' }).click();
  await page.getByRole('link', { name: 'Comprar Ahora' }).click();
  await page.getByRole('button', { name: 'Comprar Ahora' }).click();
  await page.getByPlaceholder('Ingresa tu nombre completo').fill('tobias onandia');
  await page.getByPlaceholder('Ingresa tu nombre completo').press('Tab');
  await page.getByPlaceholder('Ingresa tu correo electrónico').fill('tobiasonandia2@gmail.com');
  await page.getByPlaceholder('Ingresa tu correo electrónico').press('Tab');
  await page.getByPlaceholder('Ingresa la calle y número').fill('floricel perez 712');
  await page.getByPlaceholder('Ingresa la calle y número').press('Tab');
  await page.getByPlaceholder('Ingresa la ciudad').fill('Santa Rosa');
  await page.getByPlaceholder('Ingresa la ciudad').press('Tab');
  await page.getByPlaceholder('Ingresa su Provincia').fill('La Pampa');
  await page.getByPlaceholder('Ingresa su Provincia').press('Tab');
  await page.getByPlaceholder('Ingresa el código postal').fill('6300');
  await page.getByPlaceholder('Ingresa el código postal').press('Tab');
  await page.getByPlaceholder('Ingresa tu teléfono').fill('2954270707');
  await page.getByRole('button', { name: 'Comprar Ahora' }).click();
});
