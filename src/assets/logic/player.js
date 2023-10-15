// eslint-disable-next-line no-unused-vars
export default class player {
  marker = undefined;
  name;
  wins = 0;
  draws = 0;
  losses = 0;
  constructor(marker) {
    this.marker = marker;
    // console.log(marker);
  }

  getMarker() {
    return this.marker;
  }
  addWins() {
    this.wins = this.wins + 1;
    console.log(this.wins);
  }
  getWins() {
    return this.wins;
  }

  addLosses() {
    this.losses = this.losses + 1;
  }
  getLosses() {
    return this.losses;
  }

  addDraws() {
    this.draws = this.draws + 1;
  }
  getDraws() {
    return this.draws;
  }
}
