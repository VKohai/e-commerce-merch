import "./shoppingCart.scss";
import shibari from "../../img/Shibari_front.png";
import cross from "../../icons/Cross.svg";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
    return (
        <section className="shoppingCart">
            <div className="container">
                <h1 className="shoppingCart__title">Корзина</h1>
                <div className="shoppingCart__wrapper">
                    <div className="shoppingCart__head">
                        <div className="row">
                            <h3 className="shoppingCart__head-products">Товары</h3>
                            <h3 className="shoppingCart__head-amount">Кол-во</h3>
                            <h3 className="shoppingCart__head-price">Цена</h3>
                            <h3 className="shoppingCart__head-action">Убрать</h3>
                        </div>
                    </div>
                    <div className="shoppingCart__body">
                        <ul className="shoppingCart__items">
                            <View />
                            <View />
                            <View />
                        </ul>
                    </div>
                    <div className="shoppingCart__footer">
                        <div className="shoppingCart__total">
                            <div>
                                <span>Итог:</span>
                                <span>3.840 ₽</span>
                            </div>
                        </div>
                        <div className="shoppingCart__actions">
                            <Link to="/" className="btn btn_pointer btn_disable">Продолжить покупки</Link>
                            <Link to="/payment" className="btn btn_pointer">Перейти к оплате</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const View = () => {
    return (
        <li className="shoppingCart__item">
            <div className="row">
                <div className="shoppingCart__info">
                    <div className="shoppingCart__info-img">
                        <img src={shibari} alt="" />
                    </div>
                    <div className="shoppingCart__info-text">
                        <a href="#">
                            <h3 className="shoppingCart__info-name">Shibari</h3>
                        </a>
                        <div className="shoppingCart__info-size">Размер: M</div>
                    </div>
                </div>
                <div className="shoppingCart__amount">
                    <span className="shoppingCart__amount-minus"></span>
                    <span>1</span>
                    <span className="shoppingCart__amount-plus"></span>
                </div>
                <div className="shoppingCart__price">1.280 ₽</div>
                <div className="shoppingCart__action">
                    <span></span>
                </div>
            </div>
        </li>
    )
}

export default ShoppingCart;