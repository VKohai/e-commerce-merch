import AppFooter from "../appFooter/AppFooter";
import AppHeader from "../appHeader/AppHeader";
import ProductList from "../productList/ProductList";

function App() {
    return (
        <>
            <AppHeader />
            <main className="main">
                <ProductList />
            </main>
            <AppFooter />
        </>
    );
}

export default App;
