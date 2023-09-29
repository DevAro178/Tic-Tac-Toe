const DisplayButton = ({ className }) => {
  return (
    <div className={`Button ${className}`}>
      <span className="title">Hello</span>
      <span className="score">0</span>
    </div>
  );
};

export default DisplayButton;
