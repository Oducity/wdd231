import { getYear } from "./lastmodified.mjs";
import { lastModify } from "./lastmodified.mjs";
import { windows } from "../data/products.mjs";
import { roofs } from "../data/products.mjs";
import { solar } from "../data/products.mjs";
import { toggleHamBtn } from "./navigation.mjs";
import { createWayFinder } from "./navigation.mjs";




toggleHamBtn();
createWayFinder();
getYear();
lastModify();

function displayProducts (products){
    console.log(products);
}

displayProducts(windows);
displayProducts(roofs);
displayProducts(solar);

