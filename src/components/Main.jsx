import { useDispatch, useSelector } from "react-redux";
import Tile from "./Tile";
<<<<<<< HEAD
import { useEffect } from "react";
import { boardclicked } from "../redux/userData";

const Main = () => {
  const dispatch = useDispatch();
  const { board } = useSelector((state) => state.userData);
  useEffect(() => {
    console.log(board);
  }, [board]);
  const handleBoardClick = (index, userId) => {
    dispatch(boardclicked({ index, userId }));
  };

=======
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
>>>>>>> e2b675e6b77c0b1f74eaad38585c415cd904db4e
  return (
    <div className="main" onClick={() => handleBoardClick(2, 1)}>
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
