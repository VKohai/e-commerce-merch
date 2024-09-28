import "./hamburgerMenu.scss";
import logo from "../../icons/Logo.svg";
import { NavMenu } from "../appHeader/AppHeader";
import { Link } from "react-router-dom";
import { useState } from "react";
import Portal from "../portal/Portal";

const HamburgerMenu = ({ isVisible, toggleHamburger }) => {
    const clazz = "menu" + (isVisible ? " menu_visible" : "");

    return (
        <>
            <div className={clazz}>
                <div id="menu__close" onClick={toggleHamburger}>
                    <span></span>
                </div>
                <div className="container">
                    <div className="menu__wrapper">
                        <Link to="/" className="menu__logo" onClick={toggleHamburger}>
                            <img src={logo} alt="" />
                        </Link>
                        <NavMenu />
                        <Link to="/shoppingCart" className="btn btn_pointer" onClick={toggleHamburger} >Корзина</Link>
                    </div>
                </div>
            </div>
            <Portal className={"overlay" + (isVisible ? " overlay_visible" : "")}>
            </Portal>
        </>
    )
}

export default HamburgerMenu;