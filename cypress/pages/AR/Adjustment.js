import '../../common/Iframes.spec';

class Adjustment{


    clickonadjustmentbtn(){

        cy.readFile("cypress/pages/AR/Adjustment-loc.json").then(locator=>{
        cy.wait(3000)
        cy.LF().find(locator.Adjustment).click()

        cy.wait(7000)

        cy.LF().then(($str) =>{

            let batch_no=$str.contents().find(locator.Batch_required)

            if(batch_no.is(':visible')){

                cy.wrap($str.contents().find(locator.Batch_id)).select(1)
              }
              cy.wrap($str.contents().find(locator.Member_no)).type("northstar").wait(10000)

        
        })

        cy.LF().then(($str1) =>{
            cy.wrap($str1.contents().find(locator.Member_no)).type("northstar").wait(5000).type("{enter}")

        
            let bill_code=$str1.contents().find(locator.Bill_code)

            if(bill_code.is(':visible')){
   
             cy.wrap(bill_code).select(1)
            }
            else{
             cy.wrap($str1.contents().find(locator.Bill_code_search)).type(".").wait(2000).type("{enter}")
   
            }

            cy.wrap($str1.contents().find(locator.Date)).clear().type("06/03/2025")
             cy.wrap($str1.contents().find(locator.Description)).type("For Testing Purpose")
       
   
             cy.wrap($str1.contents().find(locator.Add_btn)).click()
   
             cy.wait(8000)
   

          })
        })

    }

    verifyadjustment(){
        cy.readFile("cypress/pages/AR/Adjustment-loc.json").then(locator=>{
        cy.LF().find(locator.Msg_verify).contains('Adjustment saved successfully')
        })
    }



}export default Adjustment;