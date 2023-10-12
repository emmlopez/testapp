describe("CX Example", () => {
  before(() => {
    cy.visit("localhost:3000");
  });
  it("Should Url is localhost:3000", () => {
    cy.url().should("eq", "http://localhost:3000/");
  });

  it("Should Tab include CX", () => {
    cy.title().should("include", "CX");
  });
});
