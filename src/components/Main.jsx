import { useDispatch, useSelector } from "react-redux";
import Tile from "./Tile";
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
