// eslint-disable-next-line no-unused-vars
export default class player {
  marker = undefined;

  wins = 0;
  draws = 0;
  losses = 0;
  constructor(marker) {
    if (marker === 1 || marker === 0) {
      this.marker = marker;
    } else {
      return { invalid: true };
    }
  }

  getMarker() {
    return this.marker;
  }
  setWins(wins) {
    this.wins = wins;
  }
  getWins() {
    return this.wins;
  }

  setLosses(losses) {
    this.losses = losses;
  }
  getLosses() {
    return this.losses;
  }

  setDraws(draws) {
    this.draws = draws;
  }
  getDraws() {
    return this.draws;
  }
}
