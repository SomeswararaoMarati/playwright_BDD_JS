Feature: Change First Name and Last Name

    @changeName
    Scenario: Successful Edit Names
        Given I navigate to "https://ecommerce-playground.lambdatest.io/"
        And I click on My account
        And I enter E-Mail Address "someshforaws@gmail.com"
        And I enter password "Welcome@123"
        And I click on submit button
        Then I should verify url contains "route=account/account"
        When I click on Edit your account information
        And I change first name to "Somesh" 
        And I change last name to "MSR"       
        And I click on Continue button
        Then I should see the success message " Success: Your account has been successfully updated."