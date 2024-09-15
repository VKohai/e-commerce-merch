import "./productList.scss"
import ProductCard from "../productCard/ProductCard";

const ProductList = () => {
    return (
        <section className="products">
            <div className="container">
                <ul className="catalog">
                    <li className="catalog__item">
                        <h2 className="products__title">Футболки</h2>
                        <div className="row">
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>
                    </li>
                    <li className="catalog__item">
                        <h2 className="products__title">Шоперы</h2>
                        <div className="row">
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>
                    </li>
                    <li className="catalog__item">
                        <h2 className="products__title">Худи, толстовки</h2>
                        <div className="row">
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>
                    </li>
                </ul>
            </div>
        </section>

    )
}

export default ProductList;