
# Cypress Framework

Cypress Framework is a set of guidelines or rules used for creating and designing test cases. The framework is comprised of a combination of industry practices and modern tools that are designed to help professionals test more efficiently.

The framework includes guidelines to coding standards, BDD approach that drive the entire framework, design patterns, test-data handling methods, page object classes, processes for storing test results, and custom utility functions on how to access external resources.

## Tech Stack

- Cypress for Backend and Frontend Automation Testing
- Javascript
- NPM as Build Tool
- Cucumber BDD as development approach
- Cucumber Preprocessor as Test Runner
- VS Code
- Git

## Framework Layers Mapping

- The Utilities & Resources Layer (L1): common, data-files, environments, cypress.json and plugins
- The Pages / Microservices Layer (L2): pages and step definitions
- The Test Suite Layer (L3): feature files

## Building the Project

Create Build

```bash
  npm install
```

Run the Test by using the GUI

```bash
    npm run open
```

Run the Test by using command line

```bash
    npm run cy:run
```

### Break down into end to end tests

The project contains four folders inside the integration that contains all the feature file:

- The backend-automation folder contains the backend related feature files
- The common/backend folder contains the backend related step-defintion
- The frontend-automation folder contains all the feature files for UI level tests
- The common/frontend folder contains the UI Level step defintions


### Coding Standards Quick Checklist

    1. Use Intention Revealing & Searchable Names
    2. Always start your Class Name with a Capital letter
    3. Always start your Method Name with a verb/verb phrase and camelCase
    4. Objects/Instances names should always be in lowercase
    5. Use Hungarian notation for variable names
    6. Pick One Word per Concept
    7. Don’t Pun

### Naming Example:

- For step definitions classes: use Screen_Feature-step-def e.g. **Example-step-def.js**
- For page classes: use Screen_Feature.spec e.g. **Example.spec.js**
- For Feature file: use Screen_Feature e.g. **Example.feature**

## Folder Structure

- **cypress** Root Folder
- **cypress/common** Support files 
- **cypress/data-files** data-files 
- **cypress/environments** environment files:** 
- **cypress/integration** feature and step-definition files
- **cypress/pages** POM files
- **cypress/plugins** plugins
- **cypress.json** configurations file 

