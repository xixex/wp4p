import React from "react";

const PizzaSlice = props => {
  const sliceDeg = 360 / props.pieces;
  const slices = [];

  for (let deg = 0; deg < 360; deg += sliceDeg) {
    const pieceStyles = {
      transform: `rotate(${deg}deg)`,
      animationDelay: `${0.5 + deg / 1000}s`
    };
    const piece = <div className="piece" style={pieceStyles} />;

    slices.push(piece);
  }

  return (
    <div className="pizza">
      <img src={props.pizza.img} alt="pizza" className="pizza__img" />
      {slices}
    </div>
  );
};
export default PizzaSlice;
