import React from "react";
import "./Style.css";

const QuickView = ({ button, id, stateModal, setStateModal }) => {
  const handelShowModal = () => {
    setStateModal({
      ...stateModal,
      id: id,
      isShow: true,
    });
  };
  return (
    <div className="lay-out">
      <button className="Quick-view" id={id} onClick={handelShowModal}>
        {button}
      </button>
    </div>
  );
};

export default QuickView;
