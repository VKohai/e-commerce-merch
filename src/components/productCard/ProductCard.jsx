import "./productCard.scss";
import shibari from "../../img/Shibari_front.png";
import { Link } from "react-router-dom";

const ProductCard = () => {
    return (
        <li className="card">
            <div className="card__wrapper">
                <div className="card__img">
                    <img src={shibari} alt={"Product image"} />
                </div>
                <div className="card__info">
                    <h3 className="card__name">Shibari</h3>
                    <div className="card__price">1.280₽</div>
                </div>
                <Link to="/product/1" className="btn btn_wide btn_pointer">Подробнее</Link>
            </div>
        </li>
    )
}

export default ProductCard;