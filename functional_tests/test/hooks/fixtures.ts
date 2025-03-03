import { BrowserContext, Page } from "@playwright/test";
import BoardGame from "../../src/pages/board_game";
import CupcakeIpsum from "../../src/pages/cupcake_ipsum";
import OrangeHrm from "../../src/pages/orange_hrm";

export const fixtures = {
    page: null as Page,
    context: null as BrowserContext,
    boardGameInstance: null as BoardGame,
    cupcakeIpsumInstance: null as CupcakeIpsum,
    orangeHrmInstance: null as OrangeHrm
} 