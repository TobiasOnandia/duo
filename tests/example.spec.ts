import test, { expect } from "@playwright/test";


test('example test', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.reload();


  // console.log(await page.getByRole('link', { name: 'Iniciar Sesion' }).click());

await page.getByRole('listitem').filter({ hasText: 'Duo Indumentaria' }).click()
});
