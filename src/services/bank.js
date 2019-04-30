import fetchURL from "./fetch";

const URLCurrency = "https://gp-js-test.herokuapp.com/pizza/currency/";

export const fetchCurrency = () => fetchURL(URLCurrency);

export const exchange = (currency, value) => {
  const typeValue = value.split(" ")[1];
  return currency[typeValue];
};
