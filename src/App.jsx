import Main from "./components/Main";
import WinsDisplay from "./components/WinsDisplay";
import Controls from "./components/controls";

function App() {
  return (
    <div className="container">
      <Controls />
      <Main />
      <WinsDisplay />
    </div>
  );
}

export default App;
