import { render } from "./modules/renderItem.js";
import { accordion } from "./modules/accordion.js";
import { auth } from "./modules/auth.js";
import { addBasket } from "./modules/addBasket.js";
import { trade } from "./modules/trade.js";
import { reloadUser } from "./modules/reloadUser.js";
import { search } from "./modules/search.js";
import { filterPrice } from "./modules/filterPrice.js";

export const URL_ITEMS = fetch('http://localhost:3000/items').then(response => response.json());
export const URL_USER = fetch('http://localhost:3000/users').then(response => response.json());
export const URL_USERITEMS = fetch('http://localhost:4000/useritem').then(response => response.json());


render();
accordion();
reloadUser();
auth();
addBasket();
trade();
search();
filterPrice();
