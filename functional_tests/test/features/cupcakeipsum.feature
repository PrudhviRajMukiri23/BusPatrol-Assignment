 Feature: Cupcake Ipsum functionalities verification

 Background: 
     Given When I travel to "https://www.cupcakeipsum.com" as a guest user:

 Scenario: Verify Cupcake Ipsum functionality
    Given I am on cupcake ipsum page
    And I see "Cupcake Ipsum - Sugar-coated Lorem Ipsum Generator"
    And  I see "Paragraphs" has "5" filled in
    When I select "Short" radio button
    And I check off 'Start with "Cupcake ipsum dolor sit amet"'
    And I see 1 instance of "Cupcake ipsum dolor sit amet" on the page
    And I do not see a "Copy to Clipboard" button
    And I click "Generate"
    Then I see 2 instance of "Cupcake ipsum dolor sit amet" on the page
