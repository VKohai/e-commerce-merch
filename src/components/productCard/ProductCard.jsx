import "./productCard.scss";
import shibari from "../../img/Shibari_front.png";

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
                <a href="#" className="btn btn_wide btn_pointer">Подробнее</a>
            </div>
        </li>
    )
}

export default ProductCard;