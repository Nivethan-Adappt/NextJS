import { useReducer } from "react";

function reducer(state, action) {}

const useReducerdata = () => {
  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return <></>;
};

export default useReducerdata;
