Feature: To-do Feature

Background: 
Given I am in the aplication

Scenario: Create a task
When I create a "Buy bus ticket" task
Then The "Buy bus ticket" is listed

Scenario: Delete a task
When I create a "Buy bus ticket" task
And I remove the "Buy bus ticket" task
Then The "Buy bus ticket" is not listed

Scenario: Edit a task
When I create a "Buy bus ticket" task
And I change the "Buy bus ticket" task to "Buy train ticket"
Then The "Buy train ticket" is listed