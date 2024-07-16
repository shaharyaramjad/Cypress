Feature: Northstar Verification

  Scenario: Creating invoice and printinting its check
    Given A User open NS and enter username and password
    Then A user verify login
    And A user select Site and open AP module
    Then I Click on Add Invoice
    Then I Add Invoice detail and save as draft
    Then I Convert Draft Invoice into Finalize and Payment