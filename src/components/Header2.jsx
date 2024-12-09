import React from 'react'
import './Header2.css'

const Header2 = ({image}) => {
  return (
    <header className="header">
        <div className="header__container">
            <div className="header__container-bg">
                <img src={image} alt="Header Background Image"/>
                </div>
                <div className="header__content">
            </div>
        </div>

    </header>
  )
}

export default Header2