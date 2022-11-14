import React, { useState, useEffect } from "react";
import Style from "./Style.module.css";
import Box from "../Featured/Box";
import NumbersButtons from "../Modal/NumbersButtons";
const SecondContent = ({ data, filterData, setFilterData, check,setCheck ,setSelectOptions}) => {
  const [buttonCheck, setButtonCheck] = useState(0);

  let categoryData = [];
  let allData = data;
  data.map((item, index) => {
    categoryData[index] = item.category;
  });

  categoryData = [...new Set(categoryData)];
  function handelFilterProducts(item) {
    setCheck(true)
    allData = data.filter((name) => name.category === item);
    setFilterData(allData);
    setSelectOptions("")
  }
  const handelResetData = () => {
    setCheck(false)
    setFilterData(data);
  };
  const buttonsNumbers = [1, 2, 3, 4];

  return (
    <div className={Style.ContentContainer}>
      <div className={Style.leftFilter}>
        <div className={Style.leftFilterFlex}>
          <div>
            <p>FILTERS</p>
          </div>
          <div>
            <button onClick={handelResetData}>RESET</button>
          </div>
        </div>
        <hr />
        <div>
          {categoryData.map((item) => {
            return (
              <button
                className={Style.buttonFilter}
                onClick={() => handelFilterProducts(item)}
              >
                {item}
              </button>
            );
          })}
        </div>
        <hr />
        <div>
          <p className={Style.sizes}>- Sizes</p>
          <div className={Style.buttonsCheck}>
            {buttonsNumbers.map((item, index) => (
              <NumbersButtons
                number={item}
                index={index}
                buttonCheck={buttonCheck}
                setButtonCheck={setButtonCheck}
              />
            ))}
          </div>
        </div>
        <p className={Style.sizes}>SEE OUR SIZING GUIDE</p>
      </div>
      <div className={Style.boxContent}>
        {!check &&
          data.map((item) => (
            <Box
              image={item.image}
              description={item.title}
              price={item.price}
            />
          ))}
        {check &&
          filterData.map((item) => (
            <Box
              image={item.image}
              description={item.title}
              price={item.price}
            />
          ))}
      </div>
    </div>
  );
};

export default SecondContent;
