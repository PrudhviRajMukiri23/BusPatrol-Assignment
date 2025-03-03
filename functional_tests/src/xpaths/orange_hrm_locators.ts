export default class OrangeHrmLocators {
    orangeHrm_userName = {
        xpath: "//input[@name='username']",
        description: "Username input field"
    }
    orangeHrm_password = {
        xpath: "//input[@name='password']",
        description: "Password input field"
    }
    orangeHrm_loginButton = {
        xpath: "//button[@type='submit']",
        description: "Login button xpath"
    }
    orangeHrm_pageHeader = {
        xpath: "//header/descendant::h6",
        description: "Header xpath value of page"
    }
    orangeHrm_mainMenuItems = {
        xpath: "//ul[@class='oxd-main-menu']/descendant::a/descendant::span",
        description: "Main menu items"
    }
    orangeHrm_adminTableBody = {
        xpath: "//div[@class='oxd-table-body']",
        description: "whole Admin results table body"
    }
    orangeHrm_adminTableBodyData = {
        xpath: "//div[@class='oxd-table-body']/descendant::div[@class='oxd-table-cell oxd-padding-cell']",
        description: "Admin table body records data xpath"
    }
    orangeHrm_loggedProfileName = {
        xpath: "//p[@class='oxd-userdropdown-name']",
        description: "Profile name of loggin user"
    }
    orangeHrm_loggedProfileMenuLinks = {
        xpath: "//ul[@class='oxd-dropdown-menu']/descendant::a",
        description: "Profile menu links of loggin user"
    }
    orangeHrm_loginPageHeader = {
        xpath: "//div[@class='orangehrm-login-logo-mobile']/following-sibling::h5",
        description: "Login page hearder with Login value"
    }
    
}