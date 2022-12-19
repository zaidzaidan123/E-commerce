import React, { useState, useEffect } from "react";
import SecondContent from "../components/SeconedContent";
import SeconedWelcome from "../components/SeconedPageWelcome";
import SelectFilterd from "../components/SelectFilterd";
import axios from "axios";
const FilterdProductsPage = () => {
  const [selectOptions, setSelectOptions] = useState("");
  const [data, setData] = useState([]);
  const [check, setCheck] = useState(false);
  const getCustomersData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((products) => setData(products.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getCustomersData();
  }, []);
  useEffect(() => {
    setFilterData(data);
  }, [data]);
  const [filterData, setFilterData] = useState(data);

  let priceData = filterData.slice();
  function handleOptionChange(value) {
    setSelectOptions(value);
    setCheck(true);
    if (value === "less") {
      setFilterData(
        priceData.sort((a, b) => Number(a.price) - Number(b.price))
      );
    } else if (value === "high") {
      setFilterData(
        priceData.sort((a, b) => Number(b.price) - Number(a.price))
      );
    } else if (value === "select") {
      setFilterData(filterData);
    }
  }
  return (
    <>
      <SeconedWelcome />
      <SelectFilterd
        selectOptions={selectOptions}
        setSelectOptions={setSelectOptions}
        handleOptionChange={handleOptionChange}
      />
      <SecondContent
        selectOptions={selectOptions}
        data={data}
        setData={setData}
        filterData={filterData}
        setFilterData={setFilterData}
        check={check}
        setCheck={setCheck}
        setSelectOptions={setSelectOptions}
      />
    </>
  );
};

export default FilterdProductsPage;
