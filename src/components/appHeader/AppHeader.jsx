import { Link } from "react-router-dom";
import logo from "../../icons/Logo.svg";
import "./appHeader.scss";

const AppHeader = ({ toggleHamburger }) => {

    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <Link to="/" className="header__logo">
                        <img src={logo} alt="logo" />
                    </Link>
                    <div id="hamburger" onClick={toggleHamburger}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <NavMenu />
                    <Link to="/shoppingCart" className="btn btn_pointer">Корзина</Link>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;

export const NavMenu = () => {
    return (
        <nav className="nav">
            <ul className="nav__menu">
                <li className="nav__menu-item">
                    <Link to="/">Каталог</Link>
                </li>
                <li className="nav__menu-item">
                    <a href="#">О нас</a>
                </li>
                <li className="nav__menu-item">
                    <a href="#">Доставка</a>
                </li>
                <li className="nav__menu-item">
                    <a href="#">Оплата</a>
                </li>
            </ul>
        </nav>
    )
}