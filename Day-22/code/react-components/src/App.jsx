function App() {
  return (
    //jsx expressions must have one parent expression that's why this div is needed.
    <div>
      <Header title="Hello World" />
      <Header title="Hello Anish" />
    </div>
  );
}

//object destructuring --> no need to use props
function Header({ title }) {
  return <h1>{title}</h1>;
}

export default App;
