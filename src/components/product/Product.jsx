import "./product.scss";

const Product = () => {
    return (
        <section className="product">
            <div className="container">
                <div className="row">
                    <div className="slider"></div>
                    <div className="product__details">
                        <h1 className="product__title">Shibari</h1>
                        <div className="product__description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.
                        </div>
                        <div className="product__actions">
                            <button className="product__sizes  btn btn_disable btn_disable_light">Размеры</button>
                            <button className="product__price btn btn_disable">
                                <span>1.280 ₽</span>
                                Выберите размер
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Product;