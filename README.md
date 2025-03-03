# BusPatrol-Assignment

### Actions Points Covered
1. Added the **functional_tests** and **performance_tests** test cases.
2. Implemented in **Page Object Model**, **Modular approach** and **Behavioral Driven Development**.
3. Implemented **Singleton class** file to serve single instance at at time.
4. Handled the **parallel** execution.
5. configured **gitHub Actions yaml** with artifacts publish feature.
6. **Reports** and **traces** generated and published in pipeline.
7. Custom **logging** and **Error handling** were implemented.
8. Implemented the feature to run test in **browserstack** and **lambdatest**.

## Functional Tests

- **Playwright** is an open-source automation framework developed by Microsoft for testing and interacting with web applications.
- I have used **Playwright** along with **Cucumber** to achieve behaviour-driven development (BDD).
- I have use
## Performance Tests

- **K6** (from Grafana) is an open-source load testing tool designed for testing the performance and scalability of applications.
- I have used **K6 library** from Grafana for testing end points performance in web application.
- I have used the shell script to execute the performance tests by setting up required env values.

#### Performance Tests Directory Structure 
```
BusPatrol-Assignment/
├── performance_tests/
│   ├── tests/            # Contains tests related performance test
│   └── utils/            # Contains utility functions for performance testing
```
## Execution of performance tests in local

- Prerequisite: 
    1. Install WSL
    2. Install K6 and Playwright in WSL
### Steps to run:

- Navigate to root folder level in local
- Open WSL in terminal
- Execute below command: 
```bash

    bash run_k6.sh

```
- Note: search_and_navigate test cases is mostly failing because the bbc website is not withstanding for too many requests as shown in below screenshot:

![alt text](./readme-images/image.png)

#### Refference for libraries 

- node.js [https://nodejs.org/en/download/package-manager]
- playwright (install typescript) [https://www.npmjs.com/package/playwright]
- cucumber [https://www.npmjs.com/package/@cucumber/cucumber]
- cucumber plugin in vscode [https://marketplace.visualstudio.com/items?itemName=CucumberOpen.cucumber-official]
- allure-cucumberjs [https://www.npmjs.com/package/allure-cucumberjs]
- allure-commandline [https://www.npmjs.com/package/allure-commandline]
- Install allure for cucumber [https://allurereport.org/docs/cucumberjs/]
- ts-node [https://www.npmjs.com/package/ts-node]
- k6 Grafana [https://grafana.com/docs/k6/latest/set-up/install-k6/]
- k6 Grafana node package [https://www.npmjs.com/package/k6]
- xk6 - [https://k6.io/blog/extending-k6-with-xk6/]
- cucumber.js ref [https://github.com/cucumber/cucumber-js/blob/main/docs/configuration.md]
- winston logger [https://www.npmjs.com/package/winston]