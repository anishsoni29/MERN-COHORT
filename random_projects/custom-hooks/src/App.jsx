//explaination of custom hooks
import { useDebugValue, useEffect } from "react";

function App() {
  //to make the MyComponent function to stop running after 5 seconds,
  // we can use the useEffect hook with the setTimeout function
  useEffect(() => {
    setTimeout(() => {
      setRerender(false); //this makes it to stop re-rendering after the setTimeout interval.
    });
  }, []); //--> using

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
    //the code goes to the bottom of the page when the dependency array changes and then it goes to the top

    return () => {
      console.log("MyComponent is unmounted");
    };
  }, []); //--> this [] is the dependency array, anytime this changes, the code reruns.
  //changing the value of the dependency array will cause the code to rerun.

  return <div>From inside MyComponent</div>;
}

export default App;
