import React from 'react'
import Styles from "./Styles.module.css"
const NumbersButtons = ({number,index,buttonCheck,setButtonCheck}) => {
    const handelButton=()=>{
        setButtonCheck(index);
    }
  return (
    <button className={index===buttonCheck?Styles.buttonChecker:Styles.buttonUnChecker} onClick={handelButton}>{number}</button>
  )
}

export default NumbersButtons