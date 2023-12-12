class inventoryPage {
  constructor() {
    this.titleLabel = '.product_label'
  }

  validateTitle() {
    cy.get(this.titleLabel).should('have.text', 'Products')
  }
}

export default new inventoryPage()
