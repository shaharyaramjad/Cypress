import { visible } from 'ansi-colors';
import 'cypress-iframe';
import { delay, find } from 'lodash';
import "cypress-xpath";
import { should } from 'chai';
import { beforeEach } from 'mocha';
import '../../common/Iframes.spec.js'
import "../../common/index.js"
import "cypress-if"

class CreateVendor{


    AddVendor(){

cy.LF().find('#Create_Vendor').click()
cy.wait(5000)
//cy.LF().find('h1:Contains(Vendor Creation)').should('be.visible')
    }


    AddingInfo(){


        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        const testname = `NSV${id}`
        //let Randomi = 'test' +cy.createRandomNumber(5)
  
    cy.LF().find('#vendorNumber').if('visible').type(testname).wait(5000)

cy.LF().find('#vendorName').type("NS Vendor"+ testname)
   
    cy.LF().find('#vendorAddonGroups').select(2)
    cy.LF().find('div.new-ui:nth-child(5) div.container-fluid div.row:nth-child(6) div.col-md-2.col-sm-4.col-xs-12.col-lg-2:nth-child(4) div.form-group > select.form-control:nth-child(4)').select(2)
    cy.LF().find('#ysearchinputacctId_0').type('1').wait(3000).type('{enter}')
    cy.LF().find(' #jeAccountValue_0').focus().clear().type('100000.00')
// cy.on('window:confirm', () => true)
//     cy.get('#result').should('have.text', 'You clicked: Ok')
    cy.LF().find('#Save2').click()

    }







}
export default CreateVendor