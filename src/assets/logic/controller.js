import board from "./board";
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
  constructor(userMarker) {
    this.gameStart = new board(userMarker);
    this.prevTurn = this.gameStart.p2.name;
    console.log(this.prevTurn);
  }
}
