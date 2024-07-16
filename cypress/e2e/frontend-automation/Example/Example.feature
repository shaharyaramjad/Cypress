 Background: I visit automation practice website
        Given I visit automation exercise website

    @sanity @regression
    Scenario: Verify the logo is visible
        Then I verify webiste logo is visible

        
    @regression
    Scenario: Verify the title of website
        Then I verify the title of the website

    @regression
    Scenario: Get the screenshot of Recommended items
        Then I capture the screenshot of recommended items