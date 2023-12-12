import {
  LOCKED_CREDENTIALS,
  REQUIRED_CREDENTIALS,
  REQUIRED_CREDENTIALS_PASSWORD,
  VALID_CREDENCIALS,
} from '../data/constantes'
import inventoryPage from '../pages/inventoryPage'
import loginPage from '../pages/loginPage'

describe('Login 😎', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('URL'))
  })
  it('Valido', () => {
    loginPage.login(VALID_CREDENCIALS.USERNAME, VALID_CREDENCIALS.PASSWORD)
    inventoryPage.validateTitle()
  })
  it('Bloqueado', () => {
    loginPage.login(LOCKED_CREDENTIALS.USERNAME, LOCKED_CREDENTIALS.PASSWORD)
    loginPage.validateErrorMessage()
  })
  it('Requerido', () => {
    loginPage.login(
        REQUIRED_CREDENTIALS.USERNAME,
        REQUIRED_CREDENTIALS.PASSWORD
    )
    loginPage.validateRequiredErrorMessage()
  })
  it('Sin Contraseña', () => {
    loginPage.login(
        REQUIRED_CREDENTIALS_PASSWORD.USERNAME,
        REQUIRED_CREDENTIALS_PASSWORD.PASSWORD
    )
    loginPage.validateRequiredPasswordErrorMessage()
  })
})
