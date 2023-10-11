import Tile from "./Tile";
import Player from "../assets/logic/player";

const Main = () => {
  const p1 = new Player(0);
  p1.setWins(2);
  p1.setLosses(5);
  p1.setDraws(1);
  console.log(p1.getMarker());
  console.log(p1.getWins());
  console.log(p1.getLosses());
  console.log(p1.getDraws());
  return (
    <div className="main">
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </div>
  );
};

export default Main;
