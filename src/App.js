import "./App.css";
import React, { useState } from "react";
import AddBar from "./components/AddsBar";
import Header from "./components/Header/List Item";
import WelcomePage from "./components/welcome-page";
import SecondPage from "./components/Featured";
import AboutMatter from "./components/AboutMatter";
import Explore from "./components/Explore";
import Shop from "./components/Shop";
import VediosBoxes from "./components/VediosBoxes";
import AsSeen from "./components/AsSeenOn";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
const App = () => {
  const [stateModal, setStateModal] = useState({
    isShow: false,
    id: -1,
  });
  return (
    <>
      <AddBar />
      <Header />
      <WelcomePage />
      <SecondPage stateModal={stateModal} setStateModal={setStateModal} />
      <AboutMatter />
      <Explore />
      <Shop />
      <VediosBoxes />
      <AsSeen />
      <Footer />
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

export default App;
