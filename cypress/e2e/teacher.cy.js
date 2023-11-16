describe("Go to the Student Page", () => {
  beforeEach(() => {
    cy.visit("/teachert");
  });

  it("should click on the Add Teacher button", () => {
    cy.get('[data-cy="add_teacher_button"]').click();
  });
});
