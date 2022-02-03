import { useState } from "react";

function App({ initialCounter = 0 }) {
  const [counter, setCounter] = useState(initialCounter);

  return (
    <div>
      counter:{counter}
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
