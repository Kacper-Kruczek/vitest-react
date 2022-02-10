import { useState } from "react";

function App({ initialCounter = 0 }) {
  const [counter, setCounter] = useState(initialCounter);
  const classNames =
    "w-64 m-auto border border-emerald-500 border-2 hover:bg-emerald-100 p-2 flex flex-col mt-3 gap-5";
  return (
    <div className={classNames}>
      <div>counter: {counter}</div>
      <button
        onClick={() => {
          setCounter((prevCounter) => prevCounter + 1);
        }}
      >
        add
      </button>
    </div>
  );
}

export default App;
