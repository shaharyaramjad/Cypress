import '../../common/Iframe.spec.js'
/// <reference types="cypress" />
class Login{

     loadhomepage(){
      /*This method is use to Visit NS */

        cy.visit('https://automation.globalnorthstar.net:9443/northstar-automation/')
    }

     enterusername(username){
      /*This method is use to enter username */
        cy.readFile("cypress/pages/AR/Adjustment-loc.json").then(locator=>{
         
        
       // let mscreen = cy.frameLoaded('iframe[title="NorthStar Application"]')
       cy.frameLoaded('iframe[title="NorthStar Application"]')
        cy.iframe().find(locator.User_Name).type(username)
    })
    }

          /*This method is use to enter password */
     enterPassword(password){


        cy.readFile("cypress/pages/AR/Adjustment-loc.json").then(locator=>{
        let mscreen = cy.frameLoaded('iframe[title="NorthStar Application"]')
        mscreen.iframe().find(locator.Password).type(password)
        })
    }
    /*This method is use to click login btn. */
     clickonloginbtn(){
      
        cy.readFile("cypress/pages/AR/Adjustment-loc.json").then(locator=>{
        let mscreen = cy.frameLoaded('iframe[title="NorthStar Application"]')
        mscreen.iframe().find(locator.Login).click()
        })

    }
   /*This method is use to verify login and close popup notifications.*/
     verifyloginsuccess(){
      
        cy.readFile("cypress/pages/AR/Adjustment-loc.json").then(locator=>{
       cy.MS().then($popup=>{
        let close=$popup.contents().find(locator.close_btn)
        cy.wait(3000)
        if(close.is(':visible')){
        close.click()
        }
       })
    })
    }

}export default Login;