import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Styles from "../components/Modal/Styles.module.css";
import { useState } from "react";
import ShowPictures from "../components/Modal/ShowPictures";
import BoldWords from "../components/Modal/BoldWords";
import { Rating } from "@mui/material";
import LightWords from "../components/Modal/LightWords";
import NumbersButtons from "../components/Modal/NumbersButtons";
import showProducts from "./Data";
import VideoBox from "../components/VediosBoxes/vedioBox";
import Logo from "../components/Header/Logo";
import Box from "../components/Featured/Box";
import CartContext from "../CartContext/CartContext";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
const ModalView = () => {
  const cartIncrease = useContext(CartContext);
  const { id } = useParams();
  const obj = showProducts[id - 1];
  const buttonsNumbers = [1, 2, 3, 4];
  const [indexBackGround, setIndexBackGround] = useState(0);
  const [pickPicture, setPicPicture] = useState(obj.images[0]);
  const [buttonCheck, setButtonCheck] = useState(0);
  const handedIncreaseCounter = () => {
    cartIncrease.setCounter(cartIncrease.counter + 1);
  };
  const handedDecreaseCounter = () => {
    if (cartIncrease.counter > 1) {
      cartIncrease.setCounter(cartIncrease.counter - 1);
    }
  };
  const handelCartIncrease = () => {
    cartIncrease.handelAddToCart(obj);
    cartIncrease.setOpen(true);
  };
  const handleClose = () => {
    cartIncrease.setOpen(false);
  };

  const dataArray = [
    {
      image: "/images/23b6a61cf7e04aa0f65cfba9c2c782a1cc814b81.png",
      title: "Lorem ipsum dolor sit amet",
    },
    {
      image: "/images/9555ed1e8dfca9f402886f44b5ee4001a4034f1d.png",
      title: "Lorem ipsum dolor sit amet",
    },
    {
      image: "/images/5dde6465fbcdab39c91f2f5d98796669d9b48c40.png",
      title: "Lorem ipsum dolor sit amet",
    },
  ];
  const dataArray2 = [
    {
      image: "/images/bd561c2928429cbbcc3ae1c05f4b3138d9c46ece.png",
    },
    {
      image: "/images/2adfd97352ef04d94e3076312fb0685a1b75e4a3.png",
    },
    {
      image: "/images/00e6e77e6b9fa4e24e5a54ab9a474af83255439c.png",
    },
    {
      image: "/images/1523bc6c3cf207c9a5d906e9a55ac79db27d0716.png",
    },
  ];
  const dataArray3 = {
    image: "/images/a2e693fe23793c9f533e32a42546e0a2a7cfbd03.png",
    description: "Pueraria Mirifica And Study Phyto Estrogens",
    price: "599",
    isNew: true,
  };
  return (
    <>
      <div className={Styles.pdp}>
        <Snackbar open={cartIncrease.open} autoHideDuration={6000} >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            add {cartIncrease.counter} products success
          </Alert>
        </Snackbar>
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
                <button
                  className={Styles.buttonUnChecker + " " + Styles.counter}
                >
                  {cartIncrease.counter}
                </button>
                <button
                  className={Styles.buttonChecker + " " + Styles.counter}
                  onClick={handedIncreaseCounter}
                >
                  +
                </button>
                <button
                  className={Styles.BlackButton}
                  onClick={handelCartIncrease}
                >
                  Add To Cart
                </button>
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
      <div>
        <img
          className={Styles.coverPic}
          alt="cover"
          src="/images/2f68621bf6370364b2ffa24e34ee8d5b7fd68f47.png"
        />
      </div>
      <div className={Styles.paragraphPadding}>
        <LightWords
          title={
            "I have taste grilled meats around the world. Before i will guide you to the various technologies (gas barbecues, charcoal barbecues, Mongolian, sauces, recipes ) i will tell you about the Greek way."
          }
        />
      </div>
      <div className={Styles.paragraphPadding}>
        <LightWords
          title={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        />
      </div>
      <div className={Styles.pdp + " " + Styles.Pics}>
        {dataArray.map((item) => (
          <div>
            <VideoBox {...item} />
          </div>
        ))}
      </div>
      <div className={Styles.paragraphPaddingColor}>
        <LightWords
          title={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        />
      </div>
      <div>
        <Logo logo="As Seen On Instgram" />

        <div className={Styles.pdp}>
          {dataArray2.map((item) => (
            <img src={item.image} alt="pic" className={Styles.FourPics} />
          ))}
        </div>
      </div>
      <div className={Styles.paragraphPaddingColor}>
        <Logo logo={"Customer Reviews"} />
        <div className={Styles.rating}>
          <div className={Styles.flexDirection}>
            <Rating name="half-rating" defaultValue={5} precision={1} />
            <LightWords title="4.8 of 5" />
          </div>
          <div className={Styles.flexDirection}>
            <LightWords title="Share your thoughts with other customers" />
            <button className={Styles.BlackButton2}>Write a review</button>
          </div>
        </div>
        <div className={Styles.paddingTop}>
          <LightWords title="Top Customers Reviews" />
          <div className={Styles.flexDirection}>
            <Rating name="half-rating" defaultValue={5} precision={1} />
            <LightWords title="4.8 of 5" />
          </div>
          <LightWords title="By Customer Name on February 18, 2017" />
          <div>
            <LightWords title="Millions of Americans turn to Lasik Surgery when their vision is less than perfect and they’re tired of being tied down to wearing glasses or contacts. What part of the eye is it that may be causing all your vision trouble? Your cornea! When the shape of your cornea is irregular, the image on your retina is blurry and out-of-focus. The cornea is a part of your eye that works to focus light and projects an image on the retina. This focusing of light is called refraction. The 3 main types of refractive errors are myopia (nearsightedness), hyperopia (farsightedness) and astigmatism. " />
          </div>
          <button className={Styles.orangeButton}>Show more reviews</button>
        </div>
      </div>
      <div>
        <Logo logo="You May Also Like" />
        <div className={Styles.Pics2}>
          {buttonsNumbers.map((item) => (
            <Box {...dataArray3} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ModalView;
