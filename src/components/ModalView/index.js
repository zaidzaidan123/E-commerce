import React from "react";
import Styles from "../Modal/Styles.module.css";
import { useState } from "react";
import ShowPictures from "../Modal/ShowPictures";
import BoldWords from "../Modal/BoldWords";
import { Rating } from "@mui/material";
import LightWords from "../Modal/LightWords";
import NumbersButtons from "../Modal/NumbersButtons";
import showProducts from "../../views/Data";

const ModalViewAll = () => {
  const obj = showProducts;
  const buttonsNumbers = [1, 2, 3, 4];
  const [indexBackGround, setIndexBackGround] = useState(0);
  const [pickPicture, setPicPicture] = useState(obj.images[0]);
  const [buttonCheck, setButtonCheck] = useState(0);
  const [counter, setCounter] = useState(1);
  const handedIncreaseCounter = () => {
    setCounter(counter + 1);
  };
  const handedDecreaseCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  return (
    <div className={Styles.pdp}>
      <div className={Styles.header}>
        <h2 className={Styles.Title}>
          <BoldWords title={obj.title} />
        </h2>
      </div>
      <div className={Styles.ProductsContainer}>
        <div className={Styles.PicturesFlexCol}>
          {obj.images.map((image, index) => (
            <ShowPictures
              image={image}
              index={index}
              {...obj}
              setPicPicture={setPicPicture}
              indexBackGround={indexBackGround}
              setIndexBackGround={setIndexBackGround}
            />
          ))}
        </div>
        <div className={Styles.FullPic}>
          <ShowPictures image={pickPicture} />
        </div>
        <div className={Styles.description}>
          <h4>
            <BoldWords title={obj.title} />
          </h4>

          <div className={Styles.flexContainer}>
            <BoldWords title={"SGD " + obj.price} orange="orange" />
            <div className={Styles.rating}>
              <Rating name="half-rating" defaultValue={5} precision={1} />
              <LightWords title="4.8 of 5" />
            </div>
          </div>
          <hr />
          <div className={Styles.longDesc}>
            <BoldWords title="Description" />
            <LightWords title="Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere from South Asia to the Horn of Africa and southern Arabian pen… " />
          </div>
          <hr />
          <div className={Styles.rating}>
            <BoldWords title="Artisan Employment" />
            <LightWords title="54 jobs" />
          </div>
          <hr />
          <div className={Styles.rating}>
            <BoldWords title="Partnership" />
            <LightWords title="Randall Armstrong" />
          </div>
          <hr />
          <div className={Styles.rating}>
            <BoldWords title="In Collab" />
            <LightWords title="Augusta Mendoza" />
          </div>
          <hr />
          <LightWords title="Size" />
          <div className={Styles.flexContainer}>
            <div>
              {buttonsNumbers.map((item, index) => (
                <NumbersButtons
                  number={item}
                  index={index}
                  buttonCheck={buttonCheck}
                  setButtonCheck={setButtonCheck}
                />
              ))}
            </div>
            <div>
              <LightWords title="Size Guidelines" />
            </div>
          </div>
          <LightWords title="Model is a US Size 2-4, wears Matter Size 1. 175 cm tall." />
          <LightWords title="Quantity" />
          <div className={Styles.buttonsLast}>
            <div>
              <button
                className={Styles.buttonChecker + " " + Styles.counter}
                onClick={handedDecreaseCounter}
              >
                -
              </button>
              <button className={Styles.buttonUnChecker + " " + Styles.counter}>
                {counter}
              </button>
              <button
                className={Styles.buttonChecker + " " + Styles.counter}
                onClick={handedIncreaseCounter}
              >
                +
              </button>
              <button className={Styles.BlackButton}>Add To Cart</button>
            </div>
            <div className={Styles.wishlist}>
              <span className={"material-symbols-outlined " + Styles.center}>
                help
              </span>
              <LightWords title="Add to wishlist" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalViewAll;
