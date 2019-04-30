import MEAT_PIZZA_IMG from "../images/meat.png";
import CHEASE_PIZZA_IMG from "../images/cheese.png";
import VEGAN_PIZZA_IMG from "../images/vegan.png";

import fetchURL from "./fetch";

export const PIZZA_MENU = {
  meat: [{ type: "meat", img: MEAT_PIZZA_IMG }],
  notMeat: [
    { type: "cheese", img: CHEASE_PIZZA_IMG },
    { type: "vegan", img: VEGAN_PIZZA_IMG }
  ]
};

const URLOrderPizza = "https://gp-js-test.herokuapp.com/pizza/order/";

export const order = (pizzaType, pieceCount) =>
  fetchURL(`${URLOrderPizza}${pizzaType}/${pieceCount}`);
