/// <reference types="cypress" />

Cypress.Commands.add('OpenDriver2', () =>{
    cy.visit('https://www.drive2.ru');
    cy.title().should("contain", "DRIVE2.RU");
})

Cypress.Commands.add("Search", (Text: string) =>{
    cy.get('input[type="search"]').type(Text).should("have.value", Text);
    cy.get('button[type="submit"]').click()
})
Cypress.Commands.add('SupportMessOpen', () =>{
    cy.get('a[data-testid="footer-links.support"]').click();
})
Cypress.Commands.add('SupportMessageInput', (name:string , email: string, nickname: string, message: string) =>{
    cy.get('input[name="name"]').type(name).should("have.value", name);
    cy.get('input[name="email"]').type(email).should("have.value", email);
    cy.get('input[name="cf[1]"]').type(nickname).should("have.value", nickname);
    cy.get('select[name="cf[2]"]').select('2')
    cy.get('textarea[name="message"]').type(message).should("have.value", message);
    cy.get('input[type="submit"]').click()
})

Cypress.Commands.add("LoginSite", (Email:string , Pasword: string) =>{
    cy.get('a[data-testid="topbar.login"]').click();
    cy.get('input[type="email"]').type(Email).should("have.value", Email);
    cy.get('input[type="password"]').type(Pasword).should("have.value", Pasword);
    cy.get('button[data-ym-target="login_from_reception_by_email"]').click();
})
