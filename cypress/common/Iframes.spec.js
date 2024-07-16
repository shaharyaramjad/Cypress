Cypress.Commands.add('MS' ,()=>{
    return cy.get('iframe[title="NorthStar Application"]').its('0.contentDocument').its('body')
        .find('iframe[name="MainScreen"]').its('0.contentDocument').its('body')
    
})
       
Cypress.Commands.add('LF' ,()=>{
    return cy.get('iframe[title="NorthStar Application"]').its('0.contentDocument').its('body')
    .find('iframe[name="MainScreen"]').its('0.contentDocument').its('body')
    .find('iframe[name="landingFrame"]').its('0.contentDocument').its('body')
    
})

Cypress.Commands.add('Landing' ,()=>{
    return cy.MS().find('#landingFrame').as('Iframe_LandingFrame')
    
})
Cypress.Commands.add('AP' ,()=>{
    return cy.get('iframe[title="NorthStar Application"]').its('0.contentDocument').its('body')
    .find('iframe[name="MainScreen"]').its('0.contentDocument').its('body')
    .find('iframe[name="landingFrame"]').its('0.contentDocument').its('body')
    .find('iframe[id="com.sibisoft.northstar.acc.ap.ui.invoice.Invoice"]').its('body')
    
})

