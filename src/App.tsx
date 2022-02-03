import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

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
