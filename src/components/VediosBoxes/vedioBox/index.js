import "./Styles.css";

const VideoBox = ({ image, title}) => {
  return (
    <div>
      <div
        className="box-vedio"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="vedio-topic">{title}</div>
    </div>
  );
};

export default VideoBox;
