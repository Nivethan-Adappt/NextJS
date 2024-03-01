import React, { useState } from "react";
import Product from "./product";

const FunComponent = () => {
  const [color, setColor] = useState("red");
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <h2>Props Example {count}</h2>
        <Product updateCounter={setCount} />
        {/* <Product
          name="Cyxus"
          desc="Non-Slip Fitness Leisure Running Sneakers"
          message={color}
        /> */}
      </div>
      {/* <div>
        <h2>State Example</h2>
        <div>
          <p>
            My Favorit color is
            <strong style={{ color: "red" }}>{color}</strong>
          </p>
        </div>
        <button onClick={() => setColor("blue")}>
          Click Button to change color
        </button>
      </div> */}
    </>
  );
};

export default FunComponent;
