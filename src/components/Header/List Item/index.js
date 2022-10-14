import "./Style.css";
import Left from "./left-component";
import Right from "./right-component";
const Header = () => {
  return (
    <div className="header-container">
      <Left />
      <Right />
    </div>
  );
};

export default Header;
