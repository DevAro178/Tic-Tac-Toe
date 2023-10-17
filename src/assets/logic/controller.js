import { useDispatch, useSelector } from "react-redux";
import board from "./board";
import { setTrial } from "../../redux/userData";
export default class controller {
  gameStart;
  prevTurn;
  tileClicked(boxId) {
    if (this.prevTurn === this.gameStart.p2.name) {
      if (this.gameStart.checkBoxEmpty(boxId)) {
        console.log("Move is allowed");
        this.gameStart.boxSelected(boxId, this.gameStart.p1.name);
        this.prevTurn = this.gameStart.p1.name;
      }
    } else {
      if (this.gameStart.checkBoxEmpty(boxId)) {
        console.log("Robots Turn");
        this.gameStart.boxSelected(boxId, this.gameStart.p2.name);
        this.prevTurn = this.gameStart.p2.name;
      }
    }
    console.log("Clicked:" + boxId);
  }
  ReloadArray() {
    this.gameStart.boardArray = Array.from({ length: 9 }, () => undefined);
    console.log(useSelector((state) => state.user.trial));
  }
  constructor(userMarker) {
    const dispatch = useDispatch();
    dispatch(setTrial());
    console.log(useSelector((state) => state.user.trial));

    this.gameStart = new board(userMarker);
    this.prevTurn = this.gameStart.p2.name;
    console.log(this.prevTurn);
  }
}
