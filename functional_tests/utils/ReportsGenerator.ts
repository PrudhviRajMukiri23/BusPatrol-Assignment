const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./test-results",
  reportPath: "./test-results/json-reports/",
  reportName: "BusPatrol Functional Tests",
  pageTitle: "Functional Tests",
  metadata:{
    browser: {
        name: 'chrome',
        version: 'latest'
    },
    device: 'PC',
    platform: {
        name: 'ubuntu',
        version: 'latest'
    }
  },
  customData: {
    title: "Run Info",
    data: [
      { label: "Project", value: "BusPatrol" },
      { label: "Release", value: "1.1" }
    ],
  },
  openReport: true,
});