import AppHeader from "../appHeader/AppHeader";
import ProductList from "../productList/ProductList";

function App() {
    return (
        <>
            <AppHeader />
            <main className="main">
                <ProductList />
            </main>
        </>
    );
}

export default App;
