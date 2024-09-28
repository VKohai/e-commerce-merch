import AppFooter from "../appFooter/AppFooter";
import AppHeader from "../appHeader/AppHeader";
import Product from "../product/Product";
import PaymentForm from "../paymentForm/PaymentForm";
import ProductCard from "../productCard/ProductCard";
import ProductList from "../productList/ProductList";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import ShowcaseSlider from "../showcaseSlider/ShowcaseSlider";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";
import MainPage from "../../pages/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <AppHeader />
            {/* <HamburgerMenu /> */}
            <main className="main">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="product/:id" element={<Product />} />
                    <Route path="shoppingCart/" element={<ShoppingCart />} />
                    <Route path="payment/" element={<PaymentForm />} />
                </Routes>
            </main>
            <AppFooter />
        </Router>
    );
}

export default App;
