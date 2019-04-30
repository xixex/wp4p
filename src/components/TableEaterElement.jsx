import React, { useEffect, useState } from "react";

const TableEaterElement = props => {
  const [toPay, setToPay] = useState(props.toPay || 0);

  const handleClick = e => {
    e.target.disabled = true;
    props.pay();
    setToPay(0);
  };

  return (
    <tr>
      <td className={props.eater.isVegan ? "green" : null}>
        {props.eater.name}
      </td>
      <td>{toPay} BLR</td>
      <td className="td__pay">
        <button className="button button_small" onClick={handleClick}>
          {toPay ? "PAY" : "PAID"}
        </button>
      </td>
    </tr>
  );
};
export default TableEaterElement;
