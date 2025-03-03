Feature: Boardgame functionalities verification

  Background:
    Given When I navigated to "https://opensource-demo.orangehrmlive.com"

  Scenario Outline: Verify login and features functionality
    Given I am on orangehrm login page
    When Login wil Credentials <username> and <password>
    And I am directed to 'Dashboard'.
    And I click on 'Admin' button on left
    And I see Records Found on page
    And Print the result displayed for Records Found.
    And I click on the Profile displayed on Right top corner of Screen
    And I see 'About', 'Support', 'Change Passowrd', 'Logout' options
    And I click on 'Logout'
    # Then I am logged out and directed to the login Page.

    Examples:
      | username | password   |
      | "Admin"  | "admin123" |
