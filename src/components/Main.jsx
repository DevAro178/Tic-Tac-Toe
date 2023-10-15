import Tile from "./Tile";

const Main = ({ gameController }) => {
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
