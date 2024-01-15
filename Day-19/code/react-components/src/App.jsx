import React from "react";

function App() {
  return (
    <div>
      <CardWrapper innerComponent={<TextComponent />} />
    </div>
  );
}

function TextComponent() {
  return <div>Hi there</div>;
}
//here another component can be defined and passed, but the wrapper is the same.

function CardWrapper({ innerComponent }) {
  return (
    <div style={{ border: "2px solid black", padding: 20 }}>
      {innerComponent}
    </div>
  );
}

export default App;
