describe("create item pass", () => {
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

    cy.get('a[href="./?view=post"]').click();
    cy.get("#postTitle").type("cypress test post");
    cy.get("#postForm button[type=submit]").click();
    cy.url().should("include", "postId");
  });
});

describe("create item - no title", () => {
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

    cy.get('a[href="./?view=post"]').click();
    cy.get("#postTitle");
    cy.get("#postForm button[type=submit]").click();
    cy.url().should("not.include", "postId");
  });
});
describe("create item - wrong uri", () => {
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

    cy.get('a[href="./?view=post"]').click();
    cy.get("#postTitle").type("cypress test post");
    cy.get("#postMedia").type("www.this.-isa-wrong-uri.com");
    cy.get("#postForm button[type=submit]").click();
    cy.url().should("not.include", "postId");
  });
});
