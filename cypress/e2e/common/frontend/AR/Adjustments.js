import { Given, Then,And,When } from "cypress-cucumber-preprocessor/steps";
import Login from "../../../../pages/Common/Login.spec";
import Master from "../../../../pages/Common/Master.spec";
import Adjustment from "../../../../pages/AR/Adjustment";
import 'cypress-iframe';
//import '../../frontend-automation/AR/Adjustment'

const login = new Login();
const master=new Master();
const adjustment=new Adjustment();


Given("A User open NS and enter username and password",()=>{

    login.loadhomepage()
    login.enterusername("su")
    login.enterPassword("1234")

})


Then ("A user verify login",()=>{

   login.clickonloginbtn()
   login.verifyloginsuccess()
    
})


And("A user select Site and open AR module",()=>{

    master.SiteSwitch(3)
    master.ModuleSwitch(" Accounts Receivable")

})

When ("A user click on adjustment btn and fill all the mandantory fields",()=>{

    adjustment.clickonadjustmentbtn()

})

// And ("fill all the mandantory fields",()=>{

//     adjustment.fillmandantoryfields()
// })

Then ("A user Sucessfully add the adjustment",()=>{

    adjustment.verifyadjustment()

})