Feature: Boardgame functionalities verification

Background: 
    Given When I travel to "https://boardgamegeek.com/advsearch/boardgame" as a guest

Scenario: Verify game search functionality
    Given I am on boardgame advanced search page
    When I fill in the "Title" with "Harry Potter and the Sorcerer's Stone Trivia Game"
    And I fill in the "Year Published Minimum" field with "1999"
    And I fill in the "Year Published Maximum" field with "2000"
    And I select "15 minutes" from the "Min Playing Time" drop down
    And I select "1.5 hours" from the "Max Playing Time" drop down
    And Clicking "Submit"
    Then I navigated to new page having "Harry Potter and the Sorcerer's Stone Trivia Game (2000)" link
    Then I print the link name that displayed
