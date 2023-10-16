import { useEffect, useState } from "react";
import controller from "./assets/logic/controller";
import Main from "./components/Main";
import WinsDisplay from "./components/WinsDisplay";
import Controls from "./components/controls";
import { useDispatch, useSelector } from "react-redux";
import { setReload } from "./redux/userData";

function App() {
  let gameController = new controller(0);
  const reload = useSelector((state) => state.user.reload);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(reload);
  }, [reload]);
  dispatch(setReload(true));
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
