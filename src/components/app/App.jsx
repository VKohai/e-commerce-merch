import AppFooter from "../appFooter/AppFooter";
import AppHeader from "../appHeader/AppHeader";
import ProductList from "../productList/ProductList";
import ShowcaseSlider from "../showcaseSlider/ShowcaseSlider";

function App() {
    return (
        <>
            <AppHeader />
            <main className="main">
                <div className="catalog">
                    <div className="catalog__item">
                        <ShowcaseSlider />
                    </div>
                    <div className="catalog__item">
                        <ProductList />
                    </div>
                    <div className="catalog__item">
                        <ProductList catalogName="Шоперы" />
                    </div>
                    <div className="catalog__item">
                        <ProductList catalogName="Худи, толстовки" />
                    </div>
                </div>
            </main>
            <AppFooter />
        </>
    );
}

export default App;
