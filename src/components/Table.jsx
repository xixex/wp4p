import React, { useState } from "react";
import TableEaterElement from "./TableEaterElement";

const Table = props => {
  const [collected, setCollectded] = useState(0);
  const toPayEach =
    Math.ceil((props.BLRPizzaPrice / props.pizzaEaters.length) * 10) / 10;

  const pay = () => {
    setCollectded(+(collected + toPayEach).toFixed(1));
  };

  const TableElements = props.pizzaEaters.map(e => (
    <TableEaterElement toPay={toPayEach} pay={pay} eater={e} />
  ));

  return (
    <div class="table_wrapper">
      <h1>{props.pizzaName}</h1>
      <table cellPadding="0" cellSpacing="0" border="0">
        <thead>
          <tr>
            <td>
              <b>NAME</b>
            </td>
            <td>
              <b>Share to pay</b>
            </td>
            <td>
              <b>Pay</b>
            </td>
          </tr>
        </thead>
        <tbody className="scroll_wrap">
          {TableElements}
          <tr>
            <td>Total order</td>
            <td>{props.BLRPizzaPrice.toFixed(1)} BYN</td>
            <td />
          </tr>
          <tr>
            <td>Money to collect</td>
            <td>
              {props.BLRPizzaPrice - collected > 0
                ? (props.BLRPizzaPrice - collected).toFixed(1)
                : 0}{" "}
              BYN
            </td>
            <td />
          </tr>
          <tr>
            <td>Money collected</td>
            <td>{collected} BYN</td>
            <td />
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Table;
