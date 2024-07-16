
import { And, Given, Then } from "cypress-cucumber-preprocessor/steps";
import Master from "../../../../pages/Common/Master.spec";
import CreateVendor from "../../../../pages/AP/CreateVendor.spec";
import Login from "../../../../pages/Common/Login.spec";






const login = new Login();
const master=new Master();
const createvendor = new CreateVendor();
Given("A User open NS and enter username and password",()=>{

    login.loadhomepage()
    login.enterusername("su")
    login.enterPassword("1234")

})


Then ("A user verify login",()=>{

   login.clickonloginbtn()
   login.verifyloginsuccess()
    
})


And("A user select Site and open AP module",()=>{

    master.SiteSwitch(4)
    master.ModuleSwitch(" Accounts Payable")

})
Then("I Click on Add Vendor", ()=> {
   createvendor.AddVendor();

})

Then ("I Add vendor Info", ()=>{

createvendor.AddingInfo();

})




