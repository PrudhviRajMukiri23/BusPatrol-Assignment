import { BrowserContext, Page } from "@playwright/test";
import BoardGame from "../../src/pages/board_game";
import CupcakeIpsum from "../../src/pages/cupcake_ipsum";

export const fixtures = {
    page: null as Page,
    context: null as BrowserContext,
    boardGameInstance: null as BoardGame,
    cupcakeIpsumInstance: null as CupcakeIpsum,
} 