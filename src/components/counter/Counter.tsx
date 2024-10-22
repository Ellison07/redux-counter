import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { decrement, increment, incrementBy, reset } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const onclick = () => {
    dispatch(increment());
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value));
  };
  return (
    <>
      <div>Counter</div>

      <div>{count}</div>
      <button onClick={onclick}>+</button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <input type="text" onChange={handleChange} />
      <button
        onClick={() => {
          dispatch(incrementBy(value));
        }}
      >
        add
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        reset
      </button>
    </>
  );
};
export default Counter;
