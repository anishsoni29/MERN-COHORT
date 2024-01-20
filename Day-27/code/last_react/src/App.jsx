//tailwind is mobile first

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RevenueCard } from "./components/RevenueCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RevenueCard title={"Amount pending"} amount />
    </>
  );
}

export default App;
