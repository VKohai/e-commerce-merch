import AppFooter from "../appFooter/AppFooter";
import AppHeader from "../appHeader/AppHeader";
import Product from "../product/Product";
import PaymentForm from "../paymentForm/PaymentForm";
import ProductCard from "../productCard/ProductCard";
import ProductList from "../productList/ProductList";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import ShowcaseSlider from "../showcaseSlider/ShowcaseSlider";

function App() {
    return (
        <>
            <AppHeader />
            <main className="main">
                <PaymentForm />
                {/* <div className="catalog">
                    <div className="catalog__item">
                        <ShoppingCart />
                    </div>
                    <div className="catalog__item">
                        <Product />
                    </div>
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
                </div> */}
            </main>
            <AppFooter />
        </>
    );
}

export default App;
