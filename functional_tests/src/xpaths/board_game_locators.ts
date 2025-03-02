export default class BoardGameLocators {
    advSearch_titleField = {
        xpath: "//input[@id='advsearch-title']",
        decription: "Title text box xpath"
    };
    advSearch_minPublishYearField = {
        xpath: "//input[@id='advsearch-yearpublished-min']",
        decription: "Year Published Minimum text box xpath"
    };
    advSearch_maxPublishYearField = {
        xpath: "//input[@id='advsearch-yearpublished-max']",
        decription: "Year Published Maximum text box xpath"
    };
    advSearch_minPlayTimeDropDown = {
        xpath: "//select[@id='advsearch-min-playing-time']",
        decription: "Min Playing Time drop down xpath"
    };
    advSearch_maxPlayTimeDropDown = {
        xpath: "//select[@id='advsearch-max-playing-time']",
        decription: "Max Playing Time drop down xpath"
    };
    advSearch_submitButton = {
        xpath: "//input[@value='Submit']",
        decription: "Submit button xpath"
    };
    advSearch_results = {
        xpath: "//div[@id='results_objectname1']/child::a[1]",
        decription: "advanced search results"
    };
}