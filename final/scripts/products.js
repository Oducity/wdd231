import { toggleHamBtn } from "./navigation.mjs";
import { createWayFinder } from "./navigation.mjs";
import { getApiData } from "./getApiData.mjs";
const url = "../final/data/products.json";





toggleHamBtn();
createWayFinder();
getApiData(url);


