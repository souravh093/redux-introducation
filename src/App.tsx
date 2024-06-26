import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <h1>React Redux Counter</h1>

      <div className="p-10 flex mx-10 gap-5 border-2 border-blue-200 rounded-md bg-gray-100">
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white"
        >
          Increment by 5
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white"
        >
          Increment
        </button>
        <h1 className="text-2xl">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 rounded-md bg-red-500 text-xl font-semibold text-white"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
