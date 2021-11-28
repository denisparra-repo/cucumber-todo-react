const todoLocators = require('../../locators/todo/todo-loc');
const commonPage = require('../../pages/common-page');
var {By, until, Key} = require('selenium-webdriver');
let contextBuilder = require('../../contextBuilder');

exports.createTask = async function(taskName)  {
   commonPage.setText(By.css(todoLocators.inputFieldTodoCreateLocator), taskName);
   await contextBuilder.getContext().driver.findElement(By.css(todoLocators.buttonAddTodoLocator)).click();
}

exports.updateTask = async function(newTaskName)  {
    commonPage.clearText(By.css(todoLocators.inputFiledTodoUpdateLocator));
    commonPage.setText(By.css(todoLocators.inputFiledTodoUpdateLocator), newTaskName);
    await contextBuilder.getContext().driver.findElement(By.css(todoLocators.buttonUpdateTodoLocator)).click();
}

exports.openEditTaskByName = async function(taskName) {
    const index = await getIndexByTaskName(taskName);
    await contextBuilder.getContext().driver.findElement(By.css(todoLocators.buttonEditTaskTextLocator(index))).click();
}

exports.deleteTaskByName = async function(taskName) {
    const index = await getIndexByTaskName(taskName);
    await contextBuilder.getContext().driver.findElement(By.css(todoLocators.buttonRemoveTaskTextLocator(index))).click();
}

async function getIndexByTaskName(taskNameToFind) {
    let tasks = await contextBuilder.getContext().driver.findElements(By.css(todoLocators.todoListLocator));
    for (let i = 0; i< tasks.length; i++) {
       let taskName = await commonPage.getText(By.css(todoLocators.taskTextLocator(i)));
       if (taskName === taskNameToFind) return i;
    }
    return -1;
}


exports.getIndexByTaskName = getIndexByTaskName;