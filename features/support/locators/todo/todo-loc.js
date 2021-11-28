module.exports = {
    inputFieldTodoCreateLocator: 'input[data-testid="input-add"]',
    buttonAddTodoLocator: 'button[data-testid="button-add"]',
    taskTextLocator: (index) => `div[data-testid="input-text-${index}"]`,
    buttonEditTaskTextLocator: (index) => `svg[data-testid="button-edit-${index}"]`,
    buttonRemoveTaskTextLocator: (index) => `svg[data-testid="button-remove-${index}"]`,
    inputFiledTodoUpdateLocator: 'input[data-testid="input-edit"]',
    buttonUpdateTodoLocator: 'button[data-testid="button-update"]',
    todoListLocator: 'div[data-testid="todo-list"] .todo-row'
}