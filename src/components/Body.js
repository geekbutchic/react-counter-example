import { React, useState } from "react";
import "./body.css";

const Body = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    if (counter < 1) {
      //If count less than one return
      return;
    }
    setCounter(counter - 1);
  };

  const Stars = () => {
    return Array.from({ length: counter }, () => (
      <i class="fa-solid fa-star"></i>
    ));
  };

  return (
    <div className="body">
      <span className="add-one">
        <button onClick={increase}>Add One</button>
      </span>
      <span className="counter">{counter}</span>
      <span className="remove-one">
        <button onClick={decrease}>Remove One</button>
      </span>
      <div className="star">
        <Stars />
      </div>
    </div>
  );
};

export default Body;
