import React from 'react'
import "./Styles.css"
import QuickView from '../../Featured/button'
import WhiteTopic from '../whiteTopic'
const BoxShop = ({image,title}) => {
  return (
    <div
        className="box-shop"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <QuickView button="Shop" />
        <WhiteTopic topic={title}/>
      </div>
  )
}

export default BoxShop