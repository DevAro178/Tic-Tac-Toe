import DisplayButton from "./DisplayButton";
const WinsDisplay = ({ human, robot }) => {
  return (
    <div className="winsDisplay">
      <DisplayButton BgClass="blueBG" name="Human" score={human.getWins()} />
      <DisplayButton
        BgClass="offwhiteBG"
        name="Draws"
        score={human.getDraws()}
      />
      <DisplayButton BgClass="yellowBG" name="Robot" score={robot.getWins()} />
    </div>
  );
};

export default WinsDisplay;
