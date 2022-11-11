import React from 'react'
import Style from "./Styles.module.css"

const Logo = ({logo}) => {
  return (
    <div ><h2 className={Style.logo}>{logo}</h2></div>
  )
}

export default Logo