//The login function returns a valid token when provided with valid credentials

describe("empty spec", () => {
  it("passes", () => {
    cy.visit("https://aerochippie.github.io/social-media-client/");
    cy.contains("Login").click();
    cy.get("#loginEmail")
      .type("dummytest33@stud.noroff.no")
      .should("have.value", "dummytest33@stud.noroff.no");
    cy.get("#loginPassword")
      .type("dummytest123")
      .should("have.value", "dummytest123");

    cy.get("#loginForm button").contains("Login").click();
  });
});
