import Tile from "./Tile";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Main = ({ gameController }) => {
  const reload = useSelector((state) => state.user.reload);
  const [reloadComp, setReloadComp] = useState(false);
  useEffect(() => {
    gameController.ReloadArray();
    setReloadComp(!reloadComp);
  }, [reload]);
  useEffect(() => {}, [reloadComp]);

  return (
    <div className="main">
      <Tile gameController={gameController} boxId={0} />
      <Tile gameController={gameController} boxId={1} />
      <Tile gameController={gameController} boxId={2} />
      <Tile gameController={gameController} boxId={3} />
      <Tile gameController={gameController} boxId={4} />
      <Tile gameController={gameController} boxId={5} />
      <Tile gameController={gameController} boxId={6} />
      <Tile gameController={gameController} boxId={7} />
      <Tile gameController={gameController} boxId={8} />
    </div>
  );
};

export default Main;
