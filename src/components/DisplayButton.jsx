const DisplayButton = ({ BgClass, name, score }) => {
  return (
    <div className={`Button ${BgClass}`}>
      <span className="title">{name}</span>
      <span className="score">{score}</span>
    </div>
  );
};

export default DisplayButton;
