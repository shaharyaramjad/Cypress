Feature: Northstar Verification

@sanity @test
  Scenario: Creating an Vendor
     Given A User open NS and enter username and password
    Then A user verify login
    And A user select Site and open AP module
    Then I Click on Add Vendor
    Then I Add vendor Info
@test
    Scenario: Creating an JE Invoice
    Given A User open NS and enter username and password
    Then A user verify login
    And A user select Site and open AP moduledule
    Then I Click on Add Invoice
    Then I Add Invoice detail and save as draft
    Then I Convert Draft Invoice into Finalize and Payment