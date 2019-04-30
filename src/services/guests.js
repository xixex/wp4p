import _ from "lodash";

import fetchURL from "./fetch";

const URLPartyGuests = "https://gp-js-test.herokuapp.com/pizza/guests/";
const URLDietsWorldBook =
  "https://gp-js-test.herokuapp.com/pizza/world-diets-book/";

const getPizzaEaters = guests => guests.filter(g => g.eatsPizza);

export const fetchGuests = () =>
  fetchURL(URLPartyGuests).then(data => data.party);

const URLEncodeGuests = guests => {
  const namesArray = guests.map(g => g.name);
  const namesStr = namesArray.join();

  return `${URLDietsWorldBook}${encodeURI(namesStr)}`;
};

export const fetchPizzaEatersDiets = pizzaEaters => {
  const URLDietsEncoded = URLEncodeGuests(pizzaEaters);
  return fetchURL(URLDietsEncoded).then(result => result.diet);
};

export const fetchPizzaEatersWithDiets = guests => {
  const pizzaEaters = getPizzaEaters(guests);
  return fetchPizzaEatersDiets(pizzaEaters).then(diets =>
    _.merge(pizzaEaters, diets)
  );
};

export const isPizzaVegan = pizzaEatersWithDiets => {
  const vegansCount = pizzaEatersWithDiets.filter(eater => eater.isVegan)
    .length;
  const notVegansCount = pizzaEatersWithDiets.length - vegansCount;
  return vegansCount > notVegansCount;
};
