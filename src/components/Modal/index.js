import React from "react";
import ReactModal from "react-modal";
import Styles from "./Styles.module.css";
import { useState } from "react";
import ShowPictures from "./ShowPictures";
import BoldWords from "./BoldWords";
import { Rating } from "@mui/material";
import LightWords from "./LightWords";
import NumbersButtons from "./NumbersButtons";
import QuickView from "../Featured/button";
const Modal = ({ id, setStateModal, StateModal }) => {
  const buttonsNumbers = [1, 2, 3, 4];
  const showProducts = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/1/1.jpg",
        "https://dummyjson.com/image/i/products/1/2.jpg",
        "https://dummyjson.com/image/i/products/1/3.jpg",
        "https://dummyjson.com/image/i/products/1/4.jpg",
        "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
      ],
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/2/1.jpg",
        "https://dummyjson.com/image/i/products/2/2.jpg",
        "https://dummyjson.com/image/i/products/2/3.jpg",
        "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
      ],
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://dummyjson.com/image/i/products/3/thumbnail.jpg",
      images: ["https://dummyjson.com/image/i/products/3/1.jpg"],
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://dummyjson.com/image/i/products/4/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/4/1.jpg",
        "https://dummyjson.com/image/i/products/4/2.jpg",
        "https://dummyjson.com/image/i/products/4/3.jpg",
        "https://dummyjson.com/image/i/products/4/4.jpg",
        "https://dummyjson.com/image/i/products/4/thumbnail.jpg",
      ],
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://dummyjson.com/image/i/products/5/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/5/1.jpg",
        "https://dummyjson.com/image/i/products/5/2.jpg",
        "https://dummyjson.com/image/i/products/5/3.jpg",
      ],
    },
    {
      id: 6,
      title: "MacBook Pro",
      description:
        "MacBook Pro 2021 with mini-LED display may launch between September, November",
      price: 1749,
      discountPercentage: 11.02,
      rating: 4.57,
      stock: 83,
      brand: "APPle",
      category: "laptops",
      thumbnail: "https://dummyjson.com/image/i/products/6/thumbnail.png",
      images: [
        "https://dummyjson.com/image/i/products/6/1.png",
        "https://dummyjson.com/image/i/products/6/2.jpg",
        "https://dummyjson.com/image/i/products/6/3.png",
        "https://dummyjson.com/image/i/products/6/4.jpg",
      ],
    },
    {
      id: 7,
      title: "Samsung Galaxy Book",
      description:
        "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      price: 1499,
      discountPercentage: 4.15,
      rating: 4.25,
      stock: 50,
      brand: "Samsung",
      category: "laptops",
      thumbnail: "https://dummyjson.com/image/i/products/7/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/7/1.jpg",
        "https://dummyjson.com/image/i/products/7/2.jpg",
        "https://dummyjson.com/image/i/products/7/3.jpg",
        "https://dummyjson.com/image/i/products/7/thumbnail.jpg",
      ],
    },
    {
      id: 8,
      title: "Microsoft Surface Laptop 4",
      description:
        "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
      price: 1499,
      discountPercentage: 10.23,
      rating: 4.43,
      stock: 68,
      brand: "Microsoft Surface",
      category: "laptops",
      thumbnail: "https://dummyjson.com/image/i/products/8/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/8/1.jpg",
        "https://dummyjson.com/image/i/products/8/2.jpg",
        "https://dummyjson.com/image/i/products/8/3.jpg",
        "https://dummyjson.com/image/i/products/8/4.jpg",
        "https://dummyjson.com/image/i/products/8/thumbnail.jpg",
      ],
    },
  ];

  const obj = showProducts[id - 1];
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
  const handelCloseModal = () => {
    setStateModal({
      ...StateModal,
      id: -1,
      isShow: false,
    });
  };
  return (
    <div>
      <ReactModal isOpen={handelCloseModal} className={Styles.modal}>
        <div className={Styles.header}>
          <h2 className={Styles.Title}>
            <BoldWords title={obj.title} />
          </h2>

          <button className={Styles.closeButton}>
            <span class="material-symbols-outlined" onClick={handelCloseModal}>
              close
            </span>
          </button>
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
      </ReactModal>
    </div>
  );
};

export default Modal;
