describe("Add Teacher", () => {
  it("should add a new teacher", () => {
    // Visit the page where the component is rendered
    cy.visit("/teacher");

    // Open the add student modal
    cy.get('[data-cy="add_teacher_modal_button"]').click();

    // Fill in the form
    cy.get("[data-cy=nationalId_input]").type("123456789");
    cy.get("[data-cy=firstName_input]").type("John");
    cy.get("[data-cy=surname_input]").type("Doe");
    cy.get("[data-cy=dob_input]").type("2000-01-01");
    cy.get("[data-cy=phone_input]").type("1234567890");
    cy.get("[data-cy=salary_input]").type("1234567890");
    cy.get("[data-cy=title_input]").select("Mr");

    // Submit the form
    cy.get("[data-cy=add_teacher_button]").click();

    // Wait for success
    cy.wait(3000);
    cy.contains("Teacher added successfully").should("be.visible");

    // Confirm that the modal is closed
    cy.get(".ant-modal-content").should("not.exist");
  });
});
