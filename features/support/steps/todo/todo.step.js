const {Given, Then, When } = require('@cucumber/cucumber')
const {createTask, getIndexByTaskName, deleteTaskByName, openEditTaskByName, updateTask} = require('../../pages/todo/todo');
const assert = require('assert');

When('I create a {string} task', async function (taskText) {
    await createTask(taskText);
});

When('I remove the {string} task', async function (taskText) {
    await deleteTaskByName(taskText);
});

When('I change the {string} task to {string}', async function (taskName, newTaskName)  {
    await openEditTaskByName(taskName);
    await updateTask(newTaskName);
});

Then('The {string} is listed', async function(text) {
    const index = await getIndexByTaskName(text);
    assert.equal(index, 0);
});

Then('The {string} is not listed', async function(text) {
    const index = await getIndexByTaskName(text);
    assert.equal(index, -1);
});
