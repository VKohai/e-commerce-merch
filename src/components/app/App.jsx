import AppFooter from "../appFooter/AppFooter";
import AppHeader from "../appHeader/AppHeader";
import Product from "../product/Product";
import PaymentForm from "../paymentForm/PaymentForm";
import ProductCard from "../productCard/ProductCard";
import ProductList from "../productList/ProductList";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import ShowcaseSlider from "../showcaseSlider/ShowcaseSlider";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";

function App() {
    return (
        <>
            <AppHeader />
            {/* <HamburgerMenu /> */}
            <main className="main">
                {/* <ShoppingCart /> */}
                {/* <PaymentForm /> */}
                <Product />
                {/* <div className="catalog">
                    <div className="catalog__item">
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
