import { toggleHamBtn } from "./navigation.mjs";
import { createWayFinder } from "./navigation.mjs";
import { displayFormData } from "./displayFormData.mjs";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

toggleHamBtn();
createWayFinder();
displayFormData(urlParams);
