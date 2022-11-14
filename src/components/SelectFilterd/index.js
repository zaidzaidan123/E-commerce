import React, { useState } from "react";
import Style from "./Style.module.css";

const SelectFilterd = ({ selectOptions, handleOptionChange }) => {
  return (
    <div className={Style.selectContainer}>
      <p className={Style.women}>Women</p>
      <div className={Style.flexDisplay}>
        <p className={Style.sort}>Sort by</p>
        <select
          value={selectOptions}
          className={Style.selectFilter}
          onChange={(e) => handleOptionChange(e.target.value)}
        >
          <option value="select"> Select </option>
          <option value="less">Less Price</option>
          <option value="high">Higher Price</option>
        </select>
      </div>
    </div>
  );
};

export default SelectFilterd;
