import AppFooter from "../appFooter/AppFooter";
import AppHeader from "../appHeader/AppHeader";
import Product from "../product/Product";
import PaymentForm from "../paymentForm/PaymentForm";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";
import MainPage from "../../pages/MainPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
    const [isVisible, toggleVisible] = useState(false);
    const toggleHamburger = () => {
        toggleVisible(!isVisible);
    };

    return (
        <Router>
            <AppHeader toggleHamburger={toggleHamburger} />
            <HamburgerMenu isVisible={isVisible} toggleHamburger={toggleHamburger} />
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
