describe('My First Test', function() {
  it('Write a todo!', function() {
    cy.visit('http://localhost:4200')
    cy.get('#todo')
      .type('This is a todo')
      .should('have.value', 'This is a todo')
  })
})

describe('My Second Test', function() {
  it('Add Todo to list', function() {
    cy.get('#addTodo').click()
    cy.get('#todoList>li').should('contain', 'This is a todo')
  })
})
