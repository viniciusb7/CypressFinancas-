describe("Should test at a functional level", () => {
  before(() => {
    cy.visit("https://barrigareact.wcaquino.me/");
    cy.get(".input-group > .form-control").type("vbrombilla@gmail.com");
    cy.get(":nth-child(2) > .form-control").type("Tfpn5757");
    cy.get(".btn").click();
    cy.get(".toast-message").should("contain", "Bem vindo");
  });

  it("Should create an account", () => {
    cy.get("[data-test=menu-settings]").click();
    cy.get('[href="/contas"]').click();
    cy.get("[data-test=nome]").type("conta de teste");
    cy.get(".btn").click();
    cy.get(".toast-message").should("contain", "Conta inserida com sucesso");
  });

  it.only("Should update an account", () => {
    // cy.get('tr > :nth-child(2) > :nth-child(1) > .far')
    cy.get("[data-test=menu-settings]").click();
    cy.get('[href="/contas"]').click();
    cy.xpath(
      "//table//td[contains(., 'conta de teste)]/..//i[@class='far fa-edit']"
    ).click();
    cy.get("[data-test=nome]").clear().type("Conta alterada");
    cy.get(".btn").click();
    cy.get(".toast-message").should("contain", "Conta atualizada com sucesso");
  });
});
