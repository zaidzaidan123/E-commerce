import React from "react";
import "./Styles.css";
import ExploreBox from "./ExploreBox";
import Logo from "../Header/Logo";
const Explore = () => {
  const dataArray = [
    {
      date: "FIELDTESTED · JANUARY 19, 2017",
      title: "Connected Clothing: Raye Padit",
      paragraph:
        "As a voice for conscious fashion, Raye Padit is motivated by the belief that one person’s actions, no matter how small, holds great impact. This core ideal has driven him to start his three passion projects: Connected Threads Asia, PeyaR, and Swagalls. ",
      image: "images/c7663a357d9244c46a1e6fa3c99a91133043df2c.png",
    },
    {
      date: "FIELDTESTED · JANUARY 19, 2017",
      title: "Kérastase: A Collaboration",
      image: "images/e2bc90982fb7e7249aa7e2b3a0dcb7947a202eee.png",
    },
    {
      date: "FIELDTESTED · JANUARY 19, 2017",
      title: "Jaclynn Seah",
      paragraph:
        "Jaclynn’s wandering spirit has brought her from the lush greenery of South America to the craters of Indonesia.",
    },
    {
      date: "FIELDTESTED · JANUARY 19, 2017",
      title: "Remarkable Resilience: Grace Kim",
      paragraph:
        "A woman in my life who has shown remarkable resilience is my best friend Grace. Since she was a kid, she struggled with general anxiety disorder and panic disorder.",
    },
    {
      date: "FIELDTESTED · JANUARY 19, 2017",
      title: "How To Wear The Lounge Lunghi",
      image: "images/7eeccc1183cfe27c1a9b800c0037999ba9921181.png",
    },
  ];
  return (
    <div className="explore-container">
      <Logo logo="Explore" />
      <div className="explore-boxes">
        {
            dataArray.map((item,i)=>(
                <ExploreBox {...item} index={i}/>
            ))
        }
      </div>
      <div className="explore-button">
        <button>See the journal</button>
        </div>
    </div>
  );
};

export default Explore;
