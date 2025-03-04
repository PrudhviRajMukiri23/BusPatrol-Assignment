Feature: Marketsheet functionalities verification

Background: 
    Given When I travel to "https://marksheet.io/html-forms.html" as a guest

Scenario: Verify game search functionality
    Given I am on 'HTML Forms' page
    And I see 'Learn CSS with my ebook' as title
    When I click on 'Get it now' link
    And I see CSS learning content with title 'CSS in 44 minutes'
    And I click on 'Home' navigation menu option
    Then I see the name 'Jeremy Thomas' on home page
