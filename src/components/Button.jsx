import React from "react";

const Button = props => {
  const text = props.loaded ? "Load" : "Just a sec...";

  return (
    <button
      onClick={e => {
        props.toggleLoadTrigger();
        props.setLoaded(false);
      }}
      className="button"
    >
      {text}
    </button>
  );
};
export default Button;
