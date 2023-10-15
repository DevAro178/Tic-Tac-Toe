import Player from "./player";

export default class board {
  static Xmarker = "X";
  static Omarker = "O";

  boardArray = Array.from({ length: 9 }, () => undefined);

  p1;
  p2;
  constructor(userMarker) {
    if (userMarker === 1) {
      this.p1 = new Player(board.Xmarker);
      this.p1.name = "Human";
      this.p2 = new Player(board.Omarker);
      this.p2.name = "Robot";
    } else {
      this.p1 = new Player(board.Omarker);
      this.p1.name = "Human";
      this.p2 = new Player(board.Xmarker);
      this.p2.name = "Robot";
    }
    return "Board is initialized";
  }

  checkGameEnd() {
    let X = "Human";
    let Y = "Robot";
    if (
      this.boardArray[0] === X &&
      this.boardArray[1] === X &&
      this.boardArray[2] === X
    ) {
      this.p1.addWins();
    }

    if (
      this.boardArray[3] === X &&
      this.boardArray[4] === X &&
      this.boardArray[5] === X
    ) {
      this.p1.addWins();
    }

    if (
      this.boardArray[6] === X &&
      this.boardArray[7] === X &&
      this.boardArray[8] === X
    ) {
      this.p1.addWins();
    }

    if (
      this.boardArray[0] === Y &&
      this.boardArray[1] === Y &&
      this.boardArray[2] === Y
    ) {
      this.p2.addWins();
    }

    if (
      this.boardArray[3] === Y &&
      this.boardArray[4] === Y &&
      this.boardArray[5] === Y
    ) {
      this.p2.addWins();
    }

    if (
      this.boardArray[6] === Y &&
      this.boardArray[7] === Y &&
      this.boardArray[8] === Y
    ) {
      this.p2.addWins();
    }

    // Columns
    if (
      this.boardArray[0] === X &&
      this.boardArray[3] === X &&
      this.boardArray[6] === X
    ) {
      this.p1.addWins();
    }

    if (
      this.boardArray[1] === X &&
      this.boardArray[4] === X &&
      this.boardArray[7] === X
    ) {
      this.p1.addWins();
    }

    if (
      this.boardArray[2] === X &&
      this.boardArray[5] === X &&
      this.boardArray[8] === X
    ) {
      this.p1.addWins();
    }

    if (
      this.boardArray[0] === Y &&
      this.boardArray[3] === Y &&
      this.boardArray[6] === Y
    ) {
      this.p2.addWins();
    }

    if (
      this.boardArray[1] === Y &&
      this.boardArray[4] === Y &&
      this.boardArray[7] === Y
    ) {
      this.p2.addWins();
    }

    if (
      this.boardArray[2] === Y &&
      this.boardArray[5] === Y &&
      this.boardArray[8] === Y
    ) {
      this.p2.addWins();
    }

    // Diagonals
    if (
      this.boardArray[0] === X &&
      this.boardArray[4] === X &&
      this.boardArray[8] === X
    ) {
      this.p1.addWins();
    }

    if (
      this.boardArray[2] === X &&
      this.boardArray[4] === X &&
      this.boardArray[6] === X
    ) {
      this.p1.addWins();
    }

    if (
      this.boardArray[0] === Y &&
      this.boardArray[4] === Y &&
      this.boardArray[8] === Y
    ) {
      this.p2.addWins();
    }

    if (
      this.boardArray[2] === Y &&
      this.boardArray[4] === Y &&
      this.boardArray[6] === Y
    ) {
      this.p2.addWins();
    }

    // Draw
    if (this.boardArray.every((cell) => cell !== undefined)) {
      this.p2.addDraws();
      this.p1.addDraws();
    }
  }
  checkBoxEmpty(boxId) {
    if (this.boardArray[boxId] === undefined) {
      return true;
    }
    return false;
  }
  boxSelected(boxId, userName) {
    this.boardArray[boxId] = userName;
    console.log(this.boardArray);
    this.checkGameEnd();
  }
}
