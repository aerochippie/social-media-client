describe("login pass - valid creds", () => {
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

    cy.get("#loginModal button[type=submit]")
      .click()
      .should(() => {
        expect(localStorage.getItem("token")).to.not.be.null;
      });
  });
});
describe("validation pass - wrong password", () => {
  it("passes", () => {
    cy.visit("https://aerochippie.github.io/social-media-client/");
    cy.get(".btn-close:visible").click().wait(1000);
    cy.contains("Login").click({ force: true }).wait(1000);

    cy.get("#loginModal input[type=email]").type("dummytest33@noroff.no");

    cy.get("#loginModal input[type=password]").type("dummytest1234");

    cy.get("#loginModal button[type=submit]")
      .click()
      .should(() => {
        expect(localStorage.getItem("token")).to.be.null;
      });
  });
});

describe("validation pass - wrong email", () => {
  it("passes", () => {
    cy.visit("https://aerochippie.github.io/social-media-client/");
    cy.get(".btn-close:visible").click().wait(1000);
    cy.contains("Login").click({ force: true }).wait(1000);

    cy.get("#loginModal input[type=email]").type("dummytest33@nor.no");

    cy.get("#loginModal input[type=password]").type("dummytest1234");

    cy.get("#loginModal button[type=submit]")
      .click()
      .should(() => {
        expect(localStorage.getItem("token")).to.be.null;
      });
  });
});

describe("validation pass - not existing user", () => {
  it("passes", () => {
    cy.visit("https://aerochippie.github.io/social-media-client/");
    cy.get(".btn-close:visible").click().wait(1000);
    cy.contains("Login").click({ force: true }).wait(1000);

    cy.get("#loginModal input[type=email]").type("justanothertest33@noroff.no");

    cy.get("#loginModal input[type=password]").type("dummytest1234");

    cy.get("#loginModal button[type=submit]")
      .click()
      .should(() => {
        expect(localStorage.getItem("token")).to.be.null;
      });
  });
});
