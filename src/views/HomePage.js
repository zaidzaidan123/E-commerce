import React, { useState } from "react";
import WelcomePage from "../components/welcome-page";
import SecondPage from "../components/Featured";
import AboutMatter from "../components/AboutMatter";
import Explore from "../components/Explore";
import Shop from "../components/Shop";
import VediosBoxes from "../components/VediosBoxes";
import AsSeen from "../components/AsSeenOn";
import Modal from "../components/Modal";

const HomePage = () => {
  const [stateModal, setStateModal] = useState({
    isShow: false,
    id: -1,
  });
  return (
    <>
      <WelcomePage />
      <SecondPage stateModal={stateModal} setStateModal={setStateModal} />
      <AboutMatter />
      <Explore />
      <Shop />
      <VediosBoxes />
      <AsSeen />

      {stateModal.isShow && (
        <Modal
          id={stateModal.id}
          setStateModal={setStateModal}
          stateModal={stateModal}
        />
      )}
    </>
  );
};

export default HomePage;
