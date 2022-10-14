import React from "react";
import "./Styles.css";
import Box from "./Box";
import Logo from "../Header/Logo";
const SecondPage = () => {
  const dataArray = [
    {
      image: "images/a83a70a5c09c4698c3bbd6c3044a4a6ba355422a-1.png",
      description: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599",
      isNew:true
    },
    {
      image: "images/88c6c728579097bb456b8880636063dd6d65bd1f.png",
      description: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599",
      isNew:true
    },
    {
      image: "images/57b25a954dd33a3587278bc87740a355f0c5bf8e.png",
      description: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599",
      isNew:true
    },
    {
      image: "images/87fe02beb67abf5c4fda69d148562a5b053f66a1.png",
      description: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599",
      isNew:false
    },
    {
      image: "images/8402c0f4f134ac3da6567d064219651be69fb559.png",
      description: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599",
      isNew:true
    },
    {
      image: "images/a18e6a7585aba0a670d755708b53fb0d50be1417.png",
      description: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599",
      isNew:false
    },
    {
      image: "images/a2e693fe23793c9f533e32a42546e0a2a7cfbd03.png",
      description: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599",
      isNew:true
    },
    {
      image: "images/74eddefbf8804508dc61eaff6a9f65257fdf4fa9.png",
      description: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599",
      isNew:false
    },
  ];
  return (
    <div className="second-page">
      <div className="seconed-header">
      <Logo logo="Featured"/>
      </div>
      <div className="all-boxes">
        {dataArray.map((item) => (
          <Box {...item} />
        ))}
      </div>
    </div>
  );
};

export default SecondPage;
