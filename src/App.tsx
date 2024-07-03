import './App.scss'
import Header from "./components/header/header.tsx";
import Banners from "./components/banners/banners.tsx";
import BrandsSlider from "./components/brandsSlider/brandsSlider.tsx";
import NewArrivals from "./components/newArrivals/newArrivals.tsx";
import Gallery from "./components/gallery/gallery.tsx";
import Footer from "./components/footer/footer.tsx";

function App() {
    return (
        <>
            <div className="store_area">
                <Header/>
                <main className={'main-section'}>
                    <Banners/>
                    <BrandsSlider/>
                    <NewArrivals/>
                    <Gallery/>
                    <BrandsSlider/>
                </main>
                <Footer/>
            </div>
        </>
    )
}

export default App
