import { test, expect } from '@playwright/test';

test('Sanity Test', async ({ page }) => {
  await page.goto('https://digital.ivy.co.il/');
  await page.getByRole('link', { name: 'התחברות ' }).click();
  await page.getByLabel('שלום לך! על מנת להתקדם עם התהליך, מה מספר הטלפון שלך? *').click();
  await page.getByLabel('שלום לך! על מנת להתקדם עם התהליך, מה מספר הטלפון שלך? *').fill('0546998897');
  await page.locator('[id="action-validate"]').click();
  await page.getByLabel('מה הסיסמא שקיבלת בהודעה? יש להקליד אותה כאן: *').click();
  await page.getByLabel('מה הסיסמא שקיבלת בהודעה? יש להקליד אותה כאן: *').fill('123456');
  await page.locator('[id="action-validate"]').click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'מחירים' }).click();
  await page.getByRole('link', { name: 'התחילו כעת' }).first().click();
  await page.getByRole('button', { name: 'הבא' }).click();
  await page.getByRole('textbox', { name: 'קוד קופון' }).click();
  await page.getByRole('textbox', { name: 'קוד קופון' }).fill('iloveivy');
  await page.getByLabel('קראתי ואני מסכים לאתר תנאי שימוש *').check();
  await page.getByText('תשלום באמצעות כרטיס אשראי').click();
  await page.locator('#meshulam-iframe-container').getByRole('img').click();
  await page.getByRole('button', { name: 'החלת קופון' }).click();
  await expect(page.locator('tfoot')).toContainText('150.00 ₪');
  await page.getByText('תשלום באמצעות כרטיס אשראי').click();
  await page.frameLocator('#meshulam-iframe').frameLocator('iframe').getByLabel('מספר כרטיס').click();
  await page.frameLocator('#meshulam-iframe').frameLocator('iframe').getByLabel('מספר כרטיס').fill('4580000000000000');
  await page.frameLocator('#meshulam-iframe').frameLocator('iframe').getByLabel('תעודת זהות של בעל הכרטיס').click();
  await page.frameLocator('#meshulam-iframe').frameLocator('iframe').getByLabel('תעודת זהות של בעל הכרטיס').fill('323220640');
  await page.frameLocator('#meshulam-iframe').frameLocator('iframe').getByLabel('שנה של תוקף הכרטיס').selectOption('29');
  await page.frameLocator('#meshulam-iframe').frameLocator('iframe').getByLabel('החודש של תוקף הכרטיס').selectOption('03');
  await page.frameLocator('#meshulam-iframe').frameLocator('iframe').getByLabel('שלושת הספרות בגב בכרטיס').click();
  await page.frameLocator('#meshulam-iframe').frameLocator('iframe').getByLabel('שלושת הספרות בגב בכרטיס').fill('356');
  await page.frameLocator('#meshulam-iframe').frameLocator('iframe').getByRole('button', { name: 'תשלום' }).click();
  await page.goto('https://digital.ivy.co.il/checkout/order-received/1082/?key=wc_order_ppzY8TIEP9MQs&order_id=1082');
  await expect(page.locator('#main')).toContainText('תודה לך. ההזמנה התקבלה בהצלחה.');
});