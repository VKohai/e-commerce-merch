import "./productList.scss"
import ProductCard from "../productCard/ProductCard";

const Productdivst = ({ catalogName = "Футболки" }) => {
    return (
        <section className="products">
            <div className="container">
                <h2 className="products__title">{catalogName}</h2>
                <ul className="products__items">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </ul>
            </div>
        </section>

    )
}

export default Productdivst;