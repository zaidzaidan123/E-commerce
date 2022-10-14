import "./Style.css";
import Logo from "../../Logo";
const leftHeader = () => {
    const leftMenuItems = ["SHOP", "FABRIC", "JOURNAL", "ABOUT"];
    return (
    <div className="left-div">
        <Logo logo="matter"/>
        {leftMenuItems.map((item) => (
          <div className="list-items">
            <div>{item}</div>
            <span class="material-symbols-outlined">expand_more</span>
          </div>
        ))}
        <div>
        <span class="material-symbols-outlined burgar">menu</span>
      </div>
      </div>
  )
}

export default leftHeader;