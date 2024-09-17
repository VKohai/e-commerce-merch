import shibariFront from "../../../img/Shibari_front.png";
import shibariBack from "../../../img/Shibari_back.png";
import "./slider.scss";

const Slider = () => {
    return (
        <div className="slider">
            <div className="slider__wrapper">
                <div className="slider__content">
                    <Slide />
                </div>
                <div className="slider__actions">
                    <button className="btn btn_pointer btn_round" id="prev"></button>
                    <ul className="slider__dots">
                        <li className="slider__dot">
                            <img src={shibariBack} alt="" />
                        </li>
                        <li className="slider__dot slider__dot_active">
                            <img src={shibariFront} alt="" />
                        </li>
                        <li className="slider__dot">
                            <img src={shibariBack} alt="" />
                        </li>
                        <li className="slider__dot">
                            <img src={shibariBack} alt="" />
                        </li>
                        <li className="slider__dot">
                            <img src={shibariBack} alt="" />
                        </li>
                        <li className="slider__dot">
                            <img src={shibariBack} alt="" />
                        </li>
                    </ul>
                    <button className="btn btn_pointer btn_round" id="next"></button>
                </div>
            </div>
        </div>
    )
}

const Slide = () => {
    return (
        <div className="slide__slide">
            <img src={shibariFront} alt="" />
        </div>
    )
}

export default Slider;