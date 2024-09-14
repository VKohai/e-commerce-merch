import logo from "../../icons/Logo.svg";
import "./appHeader.scss";

const AppHeader = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <a href="#" className="header__logo">
                        <img src={logo} alt="logo" />
                    </a>
                    <NavMenu />
                    <a href="#" className="btn btn_pointer">Корзина</a>
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
                    <a href="#">Каталог</a>
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