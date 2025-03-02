# run home page test
cd ./performance_tests/pages
chmod u+w ../../performance-reports
k6 run home_page.js

# run article page test
cd ../utils
npx playwright test
cd ../pages
chmod u+w ../../performance-reports
articleURL=$(head -n 1 ./.env)
k6 run article_reading.js -e articleURL=$articleURL

# run search and navigate test
chmod u+w ../../performance-reports
k6 run search_and_navigation.js
