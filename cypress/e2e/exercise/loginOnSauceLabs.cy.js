describe('SauceDemo Login Test', () => {
    it('Logs in with standard_user', () => {
      // Visit the website
      cy.visit('https://www.saucedemo.com/v1/');
  
      // Enter the username and password
      cy.get('[data-test=username]').type('standard_user');
      cy.get('[data-test=password]').type('secret_sauce');
      
  
      // Click the login button
      cy.contains('LOGIN').click();
  
      // Validate if the login was successful by checking for the products page title
      cy.contains('Products').should('be.visible');
    });
  });
  