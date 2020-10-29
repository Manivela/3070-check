/// <reference types="cypress" />

context("Check", () => {
  afterEach(function () {
    if (this.currentTest.state === "failed") {
      Cypress.runner.stop();
    }
  });
  it("novabilgisayar", () => {
    cy.visit(
      "https://www.novabilgisayar.com/Ekran-Karti.asp?EKRAN-KARTI-GPU=RTX-3070"
    );
    cy.get('[alt="Stokta Var"]').should("be.visible");
  });
});
