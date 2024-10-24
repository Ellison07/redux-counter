import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { decrement, increment, incrementBy, reset } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const addValue = Number(value) || 0;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value));
  };
  return (
    <>
      <div>Counter</div>

      <div>{count}</div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <input type="text" value={addValue} onChange={handleChange} />
      <button
        onClick={() => {
          dispatch(incrementBy(addValue));
        }}
      >
        add
      </button>
      <button
        onClick={() => {
          setValue(0);
          dispatch(reset());
        }}
      >
        reset
      </button>
    </>
  );
};
export default Counter;
