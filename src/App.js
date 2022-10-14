import "./App.css";
import React from "react";
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
const App = () => {
  return (
    <>
      <AddBar />
      <Header />
      <WelcomePage />
      <SecondPage />
      <AboutMatter />
      <Explore />
      <Shop />
      <VediosBoxes />
      <AsSeen/>
      <Footer/>
    </>
  );
};

export default App;
