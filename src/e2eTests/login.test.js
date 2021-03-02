const { chromium } = require("playwright");

jest.setTimeout(300000);
describe("signup flow", () => {
  test("should validate signup form", async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 50 });
    const page = await browser.newPage();
    await page.goto("http://localhost:3000/login");
    await scrollToElement(page, ".signupPage > :nth-child(1) [type='submit']");
    await page.click(".signupPage > :nth-child(1) [type='submit']");
    await page.waitForSelector(
      "#firstNameError",
      "firstName is a required field"
    );
    await browser.close();
  });
  test("should validate signup form", async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("http://localhost:3000/login");
    await scrollToElement(page, "[name='firstName']");
    await page.click("[name='firstName']");
    await page.type("[name='firstName']", "afaf");
    await page.click("#root > div > div > form");
    await page.click("[name='lastName']");
    await page.type("[name='lastName']", "ibrahimi");
    await page.click("#root > div > div > form");
    await page.click(".signupPage > :nth-child(1) [type='email']");
    await page.type(
      ".signupPage > :nth-child(1) [type='email']",
      "afaf.ibrahimi@gmail.com"
    );
    await page.click(".signupPage > :nth-child(1) [type='password']");
    await page.type(
      ".signupPage > :nth-child(1) [type='password']",
      "123456789"
    );
    await page.click(".signupPage > :nth-child(1) [type='submit']");
    await browser.close();
  });
});
async function scrollToElement(page, selector) {
  await page.evaluate((selector) => {
    const element = document.querySelector(selector);
    element.scrollIntoView({
      block: "center",
      inline: "nearest",
      behavior: "instant",
    });
  }, selector);
}
