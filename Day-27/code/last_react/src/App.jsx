import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid grid-cols-10">
        <div className="bg-red-500 col-span-4">Hi</div>
        <div className="bg-green-500 col-span-4">Hi</div>
        <div className="bg-blue-500 col-span-2">Hi</div>
        <div className="bg-violet-500">Hi</div>
      </div>
      <div className="flex">
        <div className="w-1/2 bg-red-500">Hi</div>
        <div className="w-1/2 bg-green-500">Hi</div>
      </div>
    </>
  );
}

export default App;
