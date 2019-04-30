import React from "react";

const Guests = props => {
  return (
    <div className="banner">
      <div className="banner__guests">Total guests {props.guests.length}</div>
      <div className="banner__eaters">
        Total eaters {props.pizzaEaters.length}
      </div>
    </div>
  );
};
export default Guests;
