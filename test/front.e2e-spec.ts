import chrome from 'selenium-webdriver/chrome';
import { Builder, By, Key, WebDriver } from 'selenium-webdriver';

describe('Google Search Test', () => {
  let driver: WebDriver;

  beforeAll(async () => {
    const options = new chrome.Options();

    const chromeBinary = '/usr/bin/chromium-browser';

    options.addArguments('--no-sandbox', '--disable-gpu', '--headless=new');
    options.setChromeBinaryPath(chromeBinary);

    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();
  });

  afterAll(async () => {
    await driver.quit();
  });

  describe('Decimal -> Binary', () => {
    it('should convert decimal to binary', async () => {
      await driver.get('http://localhost:3000/root');
      const decimalBox = await driver.findElement(By.id('decimalInput'));
      await decimalBox.sendKeys('13', Key.RETURN);

      const btnConvert = await driver.findElement(By.id('btnConvertirDecimal'));
      await btnConvert.click();

      const binaryBox = await driver.findElement(By.id('binaryResult'));
      const binaryValue = await binaryBox.getAttribute('value');
      expect(binaryValue).toBe('1101');
    });
  });

  describe('Binary -> Decimal', () => {
    it('should convert binary to decimal', async () => {
      await driver.get('http://localhost:3000/root');
      const binaryBox = await driver.findElement(By.id('binaryInput'));
      await binaryBox.sendKeys('1101', Key.RETURN);

      const btnConvert = await driver.findElement(By.id('btnConvertirBinary'));
      await btnConvert.click();

      const decimalBox = await driver.findElement(By.id('decimalResult'));
      const decimalValue = await decimalBox.getAttribute('value');
      expect(decimalValue).toBe('13');
    });
  });
});
