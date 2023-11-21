import { render } from "./modules/renderItem.js";
import { accordion } from "./modules/accordion.js";
import { auth } from "./modules/auth.js";
import { addBasket } from "./modules/addBasket.js";
import { trade } from "./modules/trade.js";

export const URL_ITEMS = fetch('../json/items.json');
export const URL_USER = fetch('../json/user.json');
export const URL_USERITEMS = fetch('../json/useritems.json');


render();
accordion();
auth();
addBasket();
trade();