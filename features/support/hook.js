const {After, Before} = require('@cucumber/cucumber')

After(function() {
    return this.driver.quit();
});