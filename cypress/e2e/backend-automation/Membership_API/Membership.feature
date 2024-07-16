Feature: Example feature file for API Testing

    This is an example feature file

@regression @sanity
    Scenario: I verify the response code of the API
        Given I send request to NS API
        Then I verify NS response code is 200

    @regression
    Scenario: I verify the number of records returned by the API
        Given I send request NS to API
        Then I verify response length is 500


    Scenario: I verify Response Body
    Given I send request to NS API
    Then I verify response body

Scenario: I verify member number
    Given I send request to NS API
    Then I verify Member Number From response
