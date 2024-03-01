import React, { useState } from "react";

const useStatedata = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("hello");

  function handleClick() {
    setCount(count + 1);
  }
  function handleEvent(e) {
    setText(e.target.value);
  }

  return (
    <>
      <div>
        <button onClick={handleClick}>data of value {count}</button>
      </div>
      <div>
        <input value={text} onChange={handleEvent}></input>
        Test value change {text}
        <button onClick={() => setText("hello")}>texttese</button>
      </div>
    </>
  );
};

export default useStatedata;
