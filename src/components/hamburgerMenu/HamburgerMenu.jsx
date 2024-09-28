import "./hamburgerMenu.scss";
import logo from "../../icons/Logo.svg";
import { NavMenu } from "../appHeader/AppHeader";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
    return (
        <>
            <div className="menu">
                <div id="menu__close">
                    <span></span>
                </div>
                <div className="container">
                    <div className="menu__wrapper">
                        <div className="menu__logo">
                            <img src={logo} alt="" />
                        </div>
                        <NavMenu className="nav_active" />
                        <Link to="/shoppingCart" className="btn btn_pointer">Корзина</Link>
                    </div>
                </div>
            </div>
            <div className="overlay"></div>
        </>
    )
}

export default HamburgerMenu;