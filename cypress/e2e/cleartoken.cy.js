describe("logout pass", () => {
  it("passes", () => {
    cy.visit("https://aerochippie.github.io/social-media-client/");
    cy.get(".btn-close:visible").click().wait(1000);
    cy.contains("Login").click({ force: true }).wait(1000);

    cy.get("#loginModal input[type=email]")
      .type("dummytest33@noroff.no")
      .should("have.value", "dummytest33@noroff.no");

    cy.get("#loginModal input[type=password]")
      .type("dummytest123")
      .should("have.value", "dummytest123");

    cy.get("#loginModal button[type=submit]").click().wait(1000);

    cy.get("button[data-auth=logout]")
      .click({force: true})
      .should(() => {
        expect(localStorage.getItem("token")).to.be.null;
      });
  });
});
