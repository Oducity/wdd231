import { toggleHamBtn } from "./navigation.mjs";
import { createWayFinder } from "./navigation.mjs";

import { lonspan } from "../data/stocks.mjs";
import { steptiles } from "../data/stocks.mjs";
import { metcopo } from "../data/stocks.mjs";
import { metroBond } from "../data/stocks.mjs";
import { metroClassic } from "../data/stocks.mjs";
import { metroShingo } from "../data/stocks.mjs";
import { displayAvailableStocks } from "./displayAvailableStacoks.mjs";


toggleHamBtn();
createWayFinder();
displayAvailableStocks(lonspan);
displayAvailableStocks(steptiles);
displayAvailableStocks(metcopo);
displayAvailableStocks(metroBond);
displayAvailableStocks(metroClassic);
displayAvailableStocks(metroShingo);