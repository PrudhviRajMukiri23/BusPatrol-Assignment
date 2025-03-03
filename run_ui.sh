# run functional test cases
npm run run_ui_tests

# run allure report generation
allure generate --clean ./allure-results -o ./allure-report

# run allure report open
#allure open ./allure-report