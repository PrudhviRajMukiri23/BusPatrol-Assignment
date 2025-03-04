export default class MarksSheetLocators {
    marksSheet_LearCssBookTitle = {
        xpath: "//*[contains(text(), 'Learn CSS with my ebook')]",
        description: "Learn CSS with my ebook is the heading on html form page"
    }
    marksSheet_CssBookGetItNow = {
        xpath: "//*[contains(text(), 'Get it now')]",
        description: "Learn CSS eboob get it now link on html form page"
    }
    marksSheet_CssPageHeading = {
        xpath: "//h1[@id='ffTitle']",
        description: "Learn CSS heading as 'CSS in 44 minutes' on ebook page"
    }
    marksSheet_CssPageNavMenuHome = {
        xpath: "//div[@class='navbar_nav__Fn1St']/descendant::a[contains(text(), 'Home')]",
        description: "Home option on the navigation bar on css page"
    }
    marksSheet_CssPageNavMenuHomeHiText = {
        xpath: "//*[contains(text(), 'Hi')]",
        description: "'Hi Jeremy Thomas' message of home page on css page"
    }
}