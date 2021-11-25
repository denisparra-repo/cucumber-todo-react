const {Given, Then, AfterAll } = require('cucumber')
const { Builder, By, Key } = require('selenium-webdriver');
const driver = new Builder().forBrowser('chrome').build();
const assert = require('assert');

Given('a user is in web', async () => {
    await driver.get("http://localhost:3000/")
})

Then('show welcome', () => {
    console.log('hello')
    assert.equal("hello", "hello");
})

AfterAll(async function () {
    await driver.quit();
});