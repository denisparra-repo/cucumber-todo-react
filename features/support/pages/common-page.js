let contextBuilder = require('../contextBuilder');

exports.setText = async function(inputLocator, text) {
    await contextBuilder.getContext().driver.findElement(inputLocator).sendKeys(text);
}

exports.getText = async function(inputLocator) {
    return await contextBuilder.getContext().driver.findElement(inputLocator).getText();
}

exports.clearText = async function(inputLocator) {
    await contextBuilder.getContext().driver.findElement(inputLocator).clear();
}

exports.clickOnButton = async function(buttonLocator)  {
    await contextBuilder.getContext().driver.findElement(buttonLocator).click();
}

exports.navigateTo = async function(url) {
    await contextBuilder.getContext().driver.get(url);
}