import http from 'k6/http'
import { check, sleep } from 'k6'
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

export const options = {
    scenarios: {
        users_200: {
            executor: 'constant-vus',
            vus: 200,
            duration: '20s',
            startTime: '0s',
            gracefulStop: '5s'
        },
        users_400: {
            executor: 'constant-vus',
            vus: 400,
            duration: '20s',
            startTime: '25s',
            gracefulStop: '5s'
        },
        users_1200: {
            executor: 'constant-vus',
            vus: 1200,
            duration: '20s',
            startTime: '50s',
            gracefulStop: '5s'
        },
    }
}

export default function () {

    console.log("value of search item::::"+__ENV.searchTerm)

    const url = `https://www.bbc.com/search?q=${__ENV.searchTerm}`

    let result = http.get(url)

    console.log(result.body.substring(0, 200))

    check(result, {
        "response code is 200": (res) => res.status === 200,        
        "response time is <2s ": (res) => res.timings.duration < 2000,
    })
    
    console.log(`Response Time: ${result.timings.duration}ms`)

    sleep(1)
}

export function handleSummary(data) {
    return{
        "../../performance-reports/search-and-navigation.html": htmlReport(data),
        stdout: textSummary(data, {indent: " ", enableColors: true})
    }
}