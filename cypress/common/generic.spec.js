
/**
 * This method will create a random number of the given n length
 * @param {number} n expected length of the random number
 */
Cypress.Commands.add("createRandomNumber", (n) => {
    return Math.floor(Math.random() * (9 * (Math.pow(10, n - 1)))) + (Math.pow(10, n - 1));
});2


Cypress.Commands.add('MS' ,()=>{
        return cy.get('iframe[title="NorthStar Application"]').its('0.contentDocument').its('body')
            .find('iframe[name="MainScreen"]').its('0.contentDocument').its('body')
        
    })
           
    Cypress.Commands.add('LF' ,()=>{
        return cy.get('iframe[title="NorthStar Application"]').its('0.contentDocument').its('body')
        .find('iframe[name="MainScreen"]').its('0.contentDocument').its('body')
        .find('iframe[name="landingFrame"]').its('0.contentDocument').its('body')
        
    })
    
    