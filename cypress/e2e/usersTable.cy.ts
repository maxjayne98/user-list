describe("User table tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("1.Loading should be visible at first render", () => {
    cy.get('[data-cy="loading"]').should("be.visible");
  });

  it("2.No data should be visible after removing all elements", () => {
    cy.get('[data-cy="delete-user-btn-1"]');
    for (let index = 1; index < 11; index++) {
      cy.get(`[data-cy="delete-user-btn-${index}"]`).click();
    }

    cy.get('[data-cy="no-data"]').should("be.visible");
  });

  it("3.Users should be reset to default after removing all users and pressing reset btn", () => {
    cy.get('[data-cy="delete-user-btn-1"]');
    for (let index = 1; index < 11; index++) {
      cy.get(`[data-cy="delete-user-btn-${index}"]`).click();
    }

    cy.get('[data-cy="no-data"]').should("be.visible");

    cy.get('[data-cy="reset-btn"]').should("be.visible");
    cy.get('[data-cy="reset-btn"]').click();
    for (let index = 1; index < 11; index++) {
      cy.get(`[data-cy="user-table-row-${index}"]`).should("be.visible");
    }
  });

  it("4.Filter by email and check count of rows", () => {
    cy.get('[data-cy="user-table-row-1"]')
      .find('[data-cy="user-row-value"]')
      .eq(1)
      .invoke("text")
      .then((value) => {
        cy.get('[data-cy="email-input"]').type(value as string);
      });

    cy.get('[data-cy="user-table-body"]')
      .find('[data-cy="user-row-value"]')
      .should("have.length", 2);
  });

  it("5.Filter by email and check count of rows then press reset btn and check result ", () => {
    cy.get('[data-cy="user-table-row-1"]')
      .find('[data-cy="user-row-value"]')
      .eq(1)
      .invoke("text")
      .then((value) => {
        cy.get('[data-cy="email-input"]').type(value as string);
      });

    cy.get('[data-cy="reset-btn"]').should("be.visible");
    cy.get('[data-cy="reset-btn"]').click();
    cy.get('[data-cy="user-table-body"]')
      .find('[data-cy="user-row-value"]')
      .should("have.length", 2);

    cy.get('[data-cy="email-input"]').clear();

    for (let index = 1; index < 11; index++) {
      cy.get(`[data-cy="user-table-row-${index}"]`).should("be.visible");
    }
  });

  it("6.Edit user email name and Filter by email and check count of rows", () => {
    const row = cy.get('[data-cy="user-table-row-1"] ');
    const newMail = "Mohammad@gmail.com";

    row.find('[data-cy="user-edit-btn"]').eq(1).click();
    cy.get('[data-cy="user-new-value-input"]').clear();
    cy.get('[data-cy="user-new-value-input"]').type(newMail);
    cy.get('[data-cy="user-submit-edit-btn"]').click();
    cy.get('[data-cy="email-input"]').type(newMail);
    cy.get('[data-cy="user-table-body"]')
      .find('[data-cy="user-row-value"]')
      .should("have.length", 2);
  });
});
