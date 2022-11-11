import "./Style.css";
import Logo from "../../Logo";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
const leftHeader = ({ openMenue, SetOpenMenue }) => {
  const leftMenuItems = ["SHOP", "FABRIC", "JOURNAL", "ABOUT"];
  const handelopenMenue = () => {
    SetOpenMenue(!openMenue);
  };
  return (
    <div className="left-div">
      <Logo logo="matter" />
      {leftMenuItems.map((item) => (
        <div className="list-items">
          <div>{item}</div>
          <span className="arrow">
            <KeyboardArrowDownIcon />
          </span>
        </div>
      ))}
      <div>
        <button class="burgar" onClick={handelopenMenue}>
          {openMenue ? <MenuOpenIcon /> : <MenuIcon />}
        </button>
      </div>
    </div>
  );
};

export default leftHeader;
