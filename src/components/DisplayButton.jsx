const DisplayButton = ({ BgClass }) => {
  return (
    <div className={`Button ${BgClass}`}>
      <span className="title">Hello</span>
      <span className="score">0</span>
    </div>
  );
};

export default DisplayButton;
