class Master {

    SiteSwitch(id){
        // let mscreen = cy.frameLoaded('iframe[title="NorthStar Application"]')
        // cy.wait(5000)
        // let IframeMainScreen = mscreen.iframe().find('iframe[name="MainScreen"]')
        cy.MS().then((demo) => {
            let Site_Switch_Dropdown = demo.contents().find('#mainddl')
            if(Site_Switch_Dropdown.is(':visible')) { 
                let strUrl = "";
                let sites = "";
                let sitesAndModules = "";
                cy.url().then((url) => {
                    strUrl = url;
                    return cy.request(strUrl + "testgrid/api/user-service/get-user-sites-modules/1");
                }).then((response) => {
                    const json = response.body;
                    const modules = json.response;
                    for (const key in modules) {
                        if (modules.hasOwnProperty(key)) {
                            const moduleArray = modules[key];
                            if (moduleArray.includes(id)) {
                                sitesAndModules += key;
                            }
                        }
                    }
                    cy.MS().find(Site_Switch_Dropdown).click()
                    cy.MS().find("#selectedddlSite" + sitesAndModules.charAt(0)).click({force: true})
                });
            }

        //    
        
        })
    }
ModuleSwitch(ModuleName){

    let Module_Dropdown = cy.MS().find('#nav-site-name')
                Module_Dropdown.click()
                cy.MS().find('a:contains('+ModuleName+')').click()
                cy.wait(3000)
}


} export default Master;