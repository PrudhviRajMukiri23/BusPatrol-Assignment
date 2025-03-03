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
        xpath: "//button[@type='submit' and text()=' Login ']",
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
}