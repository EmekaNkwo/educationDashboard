describe("Add Student", () => {
  it("should add a new student", () => {
    // Visit the page where the component is rendered
    cy.visit("/student");

    // Open the add student modal
    cy.get('[data-cy="add_student_button"]').click();

    // Fill in the form
    cy.get("[data-cy=nationalId_input]").type("123456789");
    cy.get("[data-cy=firstName_input]").type("John");
    cy.get("[data-cy=surname_input]").type("Doe");
    cy.get("[data-cy=dob_input]").type("2000-01-01");
    cy.get("[data-cy=phone_input]").type("1234567890");

    // Submit the form
    cy.get("[data-cy=add_student_btn]").click();

    // Wait for success
    cy.wait(3000);
    cy.contains("Student added successfully").should("be.visible");

    // Confirm that the modal is closed
    cy.get(".ant-modal-content").should("not.exist");
  });
});
