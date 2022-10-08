import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./IcecreamSlice";

function IcecreamView() {
  const numOfIcecream = useSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  return (
    <>
      <h2>Number of icecreams - {numOfIcecream}</h2>
      <button onClick={() => dispatch(ordered())}>Order icecream</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock icecreams
      </button>
    </>
  );
}

export default IcecreamView;
