import "./Style.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const WelcomePage = () => {
  return (
    <AwesomeSlider className="welcome-cont " bullets={false}>
      <div
        className="welcome-pic"
        data-src="images/c97458358789c033061390d08b4fdcf4e98893b0.png"
      >
        <div className="welcome-container">
          <h2>Perfume Tips Tricks</h2>
          <p>SHOP NOW</p>
          <hr />
        </div>
      </div>
      <div data-src="images/6106f340d7de0db6e432380b80f45bd5754e7265.png">
        <div className="welcome-container">
          <h2>Perfume Tips Tricks</h2>
          <p>SHOP NOW</p>
          <hr />
        </div>
      </div>
      <div data-src="images/65ec66049f80fcfd5da9b2984cd8ca497795d8b9.png">
        <div className="welcome-container">
          <h2>Perfume Tips Tricks</h2>
          <p>SHOP NOW</p>
          <hr />
        </div>
      </div>

      {/* <div className="welcome-pic">
        <img src="images/c97458358789c033061390d08b4fdcf4e98893b0.png" />
      </div>
      <div>
        <img src="images/c97458358789c033061390d08b4fdcf4e98893b0.png" />
      </div>
      <div>
        <img src="images/c97458358789c033061390d08b4fdcf4e98893b0.png" />
      </div> */}
    </AwesomeSlider>
  );
};

{
  /* <div className="welcome-container">
        <h2>Perfume Tips Tricks</h2>
        <p>SHOP NOW</p>
        <hr />
        <div className="chevron1">
          <span class="material-symbols-outlined">chevron_left</span>
        </div>
        <div className="chevron2">
          <span class="material-symbols-outlined">chevron_right</span>
        </div>
      </div> */
}

export default WelcomePage;
