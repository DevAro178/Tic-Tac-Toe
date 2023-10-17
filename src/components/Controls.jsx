import TurnComponent from "./TurnComponent";
import ReloadComponent from "./ReloadComponent";

const Controls = () => {
  return (
    <div className="controls">
      <div>
        <svg
          className="xicon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z" />
        </svg>

        <svg
          className="oicon"
          viewBox="0 0 256 256"
          id="Flat"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M128,236A108,108,0,1,1,236,128,108.12225,108.12225,0,0,1,128,236Zm0-192a84,84,0,1,0,84,84A84.09522,84.09522,0,0,0,128,44Z" />
        </svg>
      </div>
      <div>
        <TurnComponent />
      </div>
      <div>
        <ReloadComponent />
      </div>
    </div>
  );
};

export default Controls;
