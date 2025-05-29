Feature: API Testing

  Scenario: Test API functionality
    Given I test api
    When I send a GET
    Then the its 200