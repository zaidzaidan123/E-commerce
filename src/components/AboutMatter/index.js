import React from "react";
import "./Styles.css";
import Words from "./words";
import Logo from "../Header/Logo";
const AboutMatter = () => {
  const words = [
    {
      paragraph:
        "Our mission is threefold - to foster designer-artisan collaborations, inspire consumers to value provenance and process, and pioneer industry change and sustainability for rural textile communities. ",
      bold: true,
    },
    {
      paragraph: "Artisan Employment Days Created",
      bold: false,
    },
    {
      paragraph: "123456",
      bold: true,
    },
    {
      paragraph: "Countries Involved To Date",
      bold: false,
    },
    {
      paragraph: "India",
      bold: true,
    },
    {
      paragraph: "China",
      bold: true,
    },
    {
      paragraph: "  Sri Lanka",
      bold: true,
    },

    {
      paragraph: "#MatterTribe ",
      bold: false,
    },
    {
      paragraph: "12 designers",
      bold: true,
    },
    {
      paragraph: "12 Factories",
      bold: true,
    },
  ];
  return (
    <div className="container">
      <div className="topic">
      <Logo logo="About matter"/>
      </div>
      <div className="container-2">
        <div className="image-about"></div>
        <div className="words">
          {
            words.map((item) => (
              <Words  {...item}/>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default AboutMatter;
