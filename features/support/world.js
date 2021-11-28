const { setWorldConstructor, World } = require('@cucumber/cucumber')
const seleniumWebdriver = require('selenium-webdriver')
const contextUtil = require('./contextBuilder')

class CustomWorld extends World {
    driver = new seleniumWebdriver.Builder()
        .forBrowser('chrome')
        .build()

        constructor(options) {
        // needed so `attach`, `log` and `parameters` are properly set
        super(options);
        contextUtil.setContext(this);
    }
}

setWorldConstructor(CustomWorld)