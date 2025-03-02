import http from 'k6/http'
import { check, sleep } from 'k6'
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

export const options = {
    scenarios: {
        users_100: {
            executor: 'constant-vus',
            vus: 100,
            duration: '20s',
            startTime: '0s',
            gracefulStop: '5s'
        },
        users_500: {
            executor: 'constant-vus',
            vus: 500,
            duration: '20s',
            startTime: '25s',
            gracefulStop: '5s'
        }
    }
}

export default function () {
    console.log("value of url::::"+__ENV.articleURL)
    let result = http.get(__ENV.articleURL)

    check(result, {
        "response code is 200": (res) => res.status === 200,        
        "response time is <2s ": (res) => res.timings.duration < 2000,
    })

    sleep(1)
}

export function handleSummary(data) {
    return{
        "../../performance-reports/article_reading.html": htmlReport(data),
        stdout: textSummary(data, {indent: " ", enableColors: true})
    }
}