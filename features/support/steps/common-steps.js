const {Given, } = require('@cucumber/cucumber')
const commonPage = require('../pages/common-page')

Given('I am in the aplication', async function () {
    console.log(process.env.SYSTEM_IP)
    commonPage.navigateTo(process.env.SYSTEM_IP);
});