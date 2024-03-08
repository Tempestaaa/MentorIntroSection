import Content from "./components/Content";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="min-h-svh grid grid-rows-[auto_1fr] bg-almostWhite font-default text-default text-mediumGray font-medium">
      <Nav />
      <Content />
    </div>
  );
}

export default App;
