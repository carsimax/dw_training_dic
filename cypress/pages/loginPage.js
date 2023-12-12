import { ERROR_MESSAGES } from '../data/constantes'
class loginPage {
  constructor() {
    this.username = '#user-name'
    this.password = '#password'
    this.submitButton = '#login-button'
    this.errorMessage = 'h3[data-test="error"]'
  }
  login(username, password) {
    if (username != null) {
      cy.get(this.username).type(username)
    }
    if (password != null) {
      cy.get(this.password).type(password)
    }
    cy.get(this.submitButton).click()
  }

  validateErrorMessage() {
    cy.get(this.errorMessage).should('have.text', ERROR_MESSAGES.LOCKED_USER)
  }

  validateRequiredErrorMessage() {
    cy.get(this.errorMessage).should('have.text', ERROR_MESSAGES.REQUIRED_USER)
  }

  validateRequiredPasswordErrorMessage() {
    cy.get(this.errorMessage).should(
      'have.text',
      ERROR_MESSAGES.REQUIRED_PASSWORD
    )
  }
}
export default new loginPage()
