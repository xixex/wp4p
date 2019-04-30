import React, { useEffect, useState } from "react";
import {
  fetchGuests,
  isPizzaVegan,
  fetchPizzaEatersWithDiets
} from "../services/guests";
import { order, PIZZA_MENU } from "../services/pizzeria";
import Button from "./Button";
import Guests from "./Guests";
import PizzaSlice from "./PizzaSlice";
import Table from "./Table";
import { exchange, fetchCurrency } from "../services/bank";
import _ from "lodash";

const App = () => {
  const toggleLoadTrigger = () => {
    setLoadTrigger(!loadTrigger);
  };

  const [loadTrigger, setLoadTrigger] = useState(false);
  const [loaded, setLoaded] = useState(true);
  const [showTable, setShowTable] = useState(false);
  const [pizza, setPizza] = useState(null);
  const [guests, setGuests] = useState(null);
  const [pizzaEaters, setPizzaEaters] = useState(null);
  const [price, setPrice] = useState(0);
  const [pizzaName, setPizzaName] = useState("");
  useEffect(() => {
    if (!loaded) {
      setLoaded(false);
      setShowTable(false);
      fetchGuests()
        .then(gsts => {
          setGuests(gsts);
          return fetchPizzaEatersWithDiets(gsts);
        })
        .then(pizzaEaters => {
          setPizzaEaters(pizzaEaters);
          const veg = isPizzaVegan(pizzaEaters);
          const pzz = veg
            ? _.sample(PIZZA_MENU.notMeat)
            : _.sample(PIZZA_MENU.meat);
          setPizza(pzz);
          return Promise.all([
            order(pzz.type, pizzaEaters.length),
            fetchCurrency()
          ]);
        })
        .then(values => {
          const [pizzaOrdered, currency] = values;
          let BLRPrice = exchange(currency, pizzaOrdered.price);
          setPizzaName(pizzaOrdered.name);
          setPrice(BLRPrice);
          setLoaded(true);
          setShowTable(true);
        });
    }
  }, [loadTrigger]);

  return (
    <div className="app">
      {showTable && (
        <div className="content">
          <div className="pizza-guests_wrap">
            <PizzaSlice pizza={pizza} pieces={pizzaEaters.length} />
            <Guests guests={guests} pizzaEaters={pizzaEaters} />
          </div>
          <Table
            pizzaEaters={pizzaEaters}
            BLRPizzaPrice={price}
            pizzaName={pizzaName}
          />
        </div>
      )}
      <Button
        loaded={loaded}
        setLoaded={setLoaded}
        toggleLoadTrigger={toggleLoadTrigger}
      />
    </div>
  );
};
export default App;
