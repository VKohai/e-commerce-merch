import AppFooter from "../appFooter/AppFooter";
import AppHeader from "../appHeader/AppHeader";
import ProductList from "../productList/ProductList";
import ShowcaseSlider from "../showcaseSlider/ShowcaseSlider";

function App() {
    return (
        <>
            <AppHeader />
            <main className="main">
                <ShowcaseSlider />
                <ProductList />
            </main>
            <AppFooter />
        </>
    );
}

export default App;
