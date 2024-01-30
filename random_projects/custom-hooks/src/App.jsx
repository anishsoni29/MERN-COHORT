//explaination of custom hooks
import { useDebugValue, useEffect } from "react";

function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

//using custom hooks
function MyComponent() {
  useEffect(() => {
    console.error("MyComponent is mounted");

    return () => {
      console.log("MyComponent is unmounted");
    };
  }, []); //--> this [] is the dependency array, anytime this changes, the code reruns.

  return <div>From inside MyComponent</div>;
}

export default App;
