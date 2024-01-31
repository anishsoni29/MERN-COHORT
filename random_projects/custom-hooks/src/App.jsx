//explaination of React defined hooks
import { useDebugValue, useEffect } from "react";

//defining the state variablles here
const [render, setRender] = useState(true);

function App() {
  //to make the MyComponent function to stop running after 5 seconds,
  // we can use the useEffect hook with the setTimeout function
  useEffect(() => {
    setInterval(() => {
      setRender((r) => !r); //this makes it to stop re-rendering after the setTimeout interval.
    }, 5000);
  }, []); //--> using the dependency array to make it run according to the changes made.

  //returning if the render component is true, if not then return only the div component
  return <>{render ? <MyComponent /> : <div></div>}</>;
  //this is a ternary operator, if the render is true, then return the MyComponent, if not then return an empty div
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
