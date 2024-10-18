Feature: Login Functionality

    Scenario: Successful login
        Given I navigate to "https://ecommerce-playground.lambdatest.io/"
        And I click on My account
        And I enter E-Mail Address "someshforaws@gmail.com"
        And I enter password "Welcome@123"
        And I click on submit button
        Then I should verify url contains "route=account/account"