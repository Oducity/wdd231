import { getYear } from "./lastmodified.mjs";
import { lastModify } from "./lastmodified.mjs";
//import { windows } from "../data/products.mjs";
//import { roofs } from "../data/products.mjs";
//import { solar } from "../data/products.mjs";
import { toggleHamBtn } from "./navigation.mjs";
import { createWayFinder } from "./navigation.mjs";
import { displayHeroImage } from "./displayRandHeroImg.mjs";
import { displayHomeCards } from "./displayHomeCards.mjs";





toggleHamBtn();
createWayFinder();
displayHeroImage();
displayHomeCards();
getYear();
lastModify();



