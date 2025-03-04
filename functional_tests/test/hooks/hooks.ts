import { Before, After, BeforeAll, AfterAll, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "@playwright/test";
import * as envData from 'dotenv'
import BoardGame from "../../src/pages/board_game";
import { fixtures } from "./fixtures";
import CupcakeIpsum from "../../src/pages/cupcake_ipsum";
import OrangeHrm from "../../src/pages/orange_hrm";
import logger from "../../../utils/logger";
envData.config()

let page: Page, browser: Browser, context: BrowserContext

BeforeAll(async () => {
    try {
        logger.info("Starting the browser setup...");
        if (process.env.headless == 'true') {
            browser = await chromium.launch({ headless: true, channel: process.env.channel });
            logger.info("Browser launched in headless mode.");
        } else if (process.env.headless == 'false') {
            browser = await chromium.launch({ headless: false, channel: process.env.channel });
            logger.info("Browser launched in non-headless mode.");
        } else {
            throw new Error("Enter valid headless value either 'true' or 'false': " + process.env.headless);
        }
        fixtures.boardGameInstance = new BoardGame();
        fixtures.cupcakeIpsumInstance = new CupcakeIpsum();
        fixtures.orangeHrmInstance = new OrangeHrm();
        logger.info("Browser setup successful!!!");
    } catch (err) {
        logger.error("Error occurred while creating browser: " + err);
    }
})

Before(async () => {
    try {
        logger.info("Creating new browser context...");
        context = await browser.newContext();
        logger.info("Starting tracing for context...");
        await context.tracing.start({ screenshots: true, snapshots: true });
        page = await context.newPage();

        fixtures.context = context;
        fixtures.page = page;
        logger.info("New page created and context set.");
    } catch (err) {
        logger.error("Error during page/context setup: " + err);
    }
})

After(async ({result, pickle}) => {

    try {
        await fixtures.page.waitForLoadState('load');
        const timeStamp = new Date().toISOString().replace(/[:.-]/g, '_');
        const pickleName = pickle.name.replace(" ", "_");

        if (result.status === Status.FAILED) {
            await fixtures.page.screenshot({ path: `./test-results/screenshots/FAILED-${pickleName}-${timeStamp}.png`, type: 'png', fullPage: true });
            logger.error(`Test failed, screenshot captured for ${pickleName}`);
        } else {
            await fixtures.page.screenshot({ path: `./test-results/screenshots/PASSED-${pickleName}-${timeStamp}.png`, type: 'png', fullPage: true });
            logger.info(`Test passed, screenshot captured for ${pickleName}`);
        }

        const traceFileName = `traces-${timeStamp}.zip`;
        await fixtures.context.tracing.stop({ path: `./traces/${traceFileName}` });
        logger.info(`Trace file saved: ${traceFileName}`);

        await fixtures.context.close();
        await fixtures.page.close();
        logger.info("Context and page closed successfully.");
    } catch (err) {
        logger.error("Error in After hook: " + err);
    }
})

AfterAll(async () => {
    try {
        await browser.close();
        logger.info("Browser closed successfully.");
    } catch (err) {
        logger.error("Error while closing the browser: " + err);
    }
})