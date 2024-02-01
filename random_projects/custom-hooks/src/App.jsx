//use interval hook

import { useEffect, useState } from "react";

function useInterval(fn, timeout) {
  useEffect(() => {
    setInterval(() => {
      fn();
    }, timeout);
    return () => {
      clearInterval();
    }; //clearing the interval
  }, []);
}

function App() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount((c) => c + 1);
  }, 1000);
  return <>Timer is at {count}</>;
}

export default App;
