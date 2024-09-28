import ProductList from "../components/productList/ProductList";
import ShowcaseSlider from "../components/showcaseSlider/ShowcaseSlider";

const MainPage = () => {
    return (
        <>
            <div className="catalog">
                <div className="catalog__item">
                    <ShowcaseSlider />
                </div>
                <div className="catalog__item">
                    <ProductList catalogName="Футболки" />
                </div>
                <div className="catalog__item">
                    <ProductList catalogName="Шоперы" />
                </div>
                <div className="catalog__item">
                    <ProductList catalogName="Худи, толстовки" />
                </div>
            </div>
        </>
    )
}

export default MainPage;