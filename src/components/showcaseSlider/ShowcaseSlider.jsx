import "./showcaseSlider.scss";
import shibari from "../../img/Shibari.png";
import { Link } from "react-router-dom";

const ShowcaseSlider = () => {
    return (
        <div className="showcase">
            <div className="container">
                <div className="showcase__wrapper">
                    <div className="showcase__slider">
                        <Slide />
                    </div>
                    <div className="showcase__controls">
                        <button className="btn btn_pointer btn_round" id="prev"></button>
                        <button className="btn btn_pointer btn_round" id="next"></button>
                    </div>
                    <ul className="showcase__dots">
                        <li className="showcase__dot"></li>
                        <li className="showcase__dot showcase__dot_active"></li>
                        <li className="showcase__dot"></li>
                        <li className="showcase__dot"></li>
                        <li className="showcase__dot"></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const Slide = () => {
    return (
        <div className="showcase__slide">
            <div className="row">
                <div className="showcase__slide-info">
                    <h2 className="showcase__slide-title title title_fz40">Футболка Shibari</h2>
                    <div className="showcase__slide-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</div>
                    <Link to="/product/1" className="btn btn_pointer btn_shadow">Подробнее</Link>
                </div>
                <div className="showcase__slide-img">
                    <img src={shibari} alt="shibari" />
                </div>
            </div>
        </div>
    )
}

export default ShowcaseSlider;