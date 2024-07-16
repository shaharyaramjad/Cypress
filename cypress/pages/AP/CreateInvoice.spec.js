import { visible } from 'ansi-colors';
import 'cypress-iframe';
import { delay, find } from 'lodash';
import "cypress-xpath";
import { should } from 'chai';
import { beforeEach } from 'mocha';
import '../../common/Iframes.spec.js'
import "../../common/generic.spec.js"
import "cypress-if"
import "select"

class CreateInvoice{

//This method is to navigate to Invoice creation page in AP -> Process
    GoingToCreateInvoice(){
        cy.wait(5000)
        cy.readFile('cypress/pages/AP/AP-loc.json').then((locator) => {
        cy.LF().find(locator.CreateInvoice_MP).click()
        cy.wait(5000)
    })}

//This method is used for saving invoice inn draft state
    SaveInvoiceDraft(){

        cy.readFile('cypress/pages/AP/AP-loc.json').then((locator) => {
        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        const testname = `CYV${id}`
        
        cy.wait(5000)
        cy.LF().find(locator.Vendor_Selection).if('visible').type(".").wait(5000).type('{downArrow}').wait(5000).type('{enter}')
        cy.wait(2000)
        cy.LF().find(locator.Invoice_Number).type(testname,{force: true})
        cy.LF().xpath(locator.Invoice_Amount).type('20',{force: true})
        const draftBtn = cy.LF().find(locator.Invoice_DraftBtn)
        draftBtn.eq(0).click()

})}


// This process is used to convert Invoice from draft to finalize
InvoiceDraftToFinalize(){
        cy.readFile('cypress/pages/AP/AP-loc.json').then((locator) => {
        cy.wait(4000)
        cy.LF().xpath(locator.Invoice_Selection).click()
        cy.LF().xpath(locator.Invoice_FinalizeBtn).click()
        cy.LF().find(locator.Invoice_Payment_selection).select('Check')
        cy.LF().xpath(locator.Invoice_Selection).click()
        cy.LF().xpath(locator.Invoice_Selection).click()
        cy.wait(2000)
       let APFrame = cy.get('iframe[title="NorthStar Application"]').its('0.contentDocument').its('body')
    .find('iframe[name="MainScreen"]').its('0.contentDocument').its('body')
    .find('iframe[name="landingFrame"]').its('0.contentDocument').its('body')
    .find('iframe[id="com.sibisoft.northstar.acc.ap.ui.invoice.Invoice"]')
       APFrame.then(()=>
       { 
        // cy.on('window:confirm', () => {
        //     // handle the confirmation popup here
        //     // e.g. accept the confirmation by returning true
        //     return true;
        //   });
        cy.on('window:confirm', () => {
            //     // handle the confirmation popup here
            //     // e.g. accept the confirmation by returning true
              return true;
              });
              
              cy.LF().xpath(locator.Invoice_QuickPayBtn).click()
            APFrame.contains('okCancel').click()
            
           
                  
                  
                  
                  
                  
                              
             //APFrame.window().confirm()


        // .window().then((win) => {
        //         cy.stub(win, 'confirm').returns(true); // This will accept the popup
        //     //     // Or use cy.stub(win, 'confirm').returns(false) to dismiss the popup
            //   });
    
    //})
})
          
          // perform the action that triggers the confirmation popup
          
        // let mscreen = cy.frameLoaded('iframe[title="NorthStar Application"]')

        //     // mscreen.window().then((win) => {
        //     //     cy.frameLoaded('iframe[title="NorthStar Application"]').stub(win, 'confirm').returns(true,{force:true}); // This will accept the popup
        //     //        // Or use cy.stub(win, 'confirm').returns(false) to dismiss the popup
        //     //      });
                         
        //     mscreen.then(() =>
        //  {
        // cy.on('window:alert', (str) => {
        //     cy.log(`Prompt was present with message: ${str}`);
        //     // You can enter a value into the prompt using cy.window().then()
        //     // Or you can dismiss the prompt using cy.on('window:confirm') or cy.on('window:alert')
        //     return true; // This will dismiss the prompt
        //   });})
          cy.wait(3000)  
        //  cy.window().then((win) => {
        //    cy.stub(win, 'prompt').returns('user input'); // This will enter 'user input' in the prompt
        //     // Or use cy.stub(win, 'prompt').returns(null) to dismiss the prompt
        //    });
        cy.wait(3000)
        // cy.window().then((win) => {
        //     cy.stub(win, 'confirm').returns(true); // This will accept the popup
        //     // Or use cy.stub(win, 'confirm').returns(false) to dismiss the popup
        //   });
       
       cy.LF().find(locator.Invoice_Check_Selection).check()
       // cy.LF().find(locator.Invoice_Check_Selection).should('be.visible').select(1)
        cy.LF().find(locator.Invoice_check_confirmation).click()
        .wait(5000)
        cy.LF().find(locator.Check_Confirmation).if('visible').click()
        cy.LF().xpath(locator.CheckPrintConfirm).click()


})}






}
export default CreateInvoice