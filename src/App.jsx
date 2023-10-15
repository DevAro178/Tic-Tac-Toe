import { useEffect, useState } from "react";
import controller from "./assets/logic/controller";
import Main from "./components/Main";
import WinsDisplay from "./components/WinsDisplay";
import Controls from "./components/controls";

function App() {
  let gameController = new controller(0);
  let [reload, setReload] = useState(false);
  useEffect(() => {
    if (reload) {
      console.log("Asd");
    }
  }, [reload]);
  return (
    <div className="container">
      <Controls reload={reload} setReload={setReload} />
      <Main gameController={gameController} />
      <WinsDisplay
        human={gameController.gameStart.p1}
        robot={gameController.gameStart.p2}
      />
    </div>
  );
}

export default App;
