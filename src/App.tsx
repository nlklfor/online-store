import './App.scss'
import Header from "./components/header/header.tsx";
import NewArrivals from "./components/newArrivals/newArrivals.tsx";
import Gallery from "./components/gallery/gallery.tsx";
import Footer from "./components/footer/footer.tsx";
import { useEffect } from "react";
import { authStore } from "./stores/AuthStore.ts";
import Background from './components/animationBack/background.tsx';

function App() {

    useEffect(() => {
        if (authStore.isAuth) {
            authStore.setAuthHeader(authStore.token);
        }
    }, []);

    return (
        <>
            <div className="store_area">
                <Background>
                    <Header />
                </Background>
                <main className={'main-section'}>
                    <NewArrivals />
                    <Gallery />
                </main>
                <Footer />
            </div>
        </>
    );

}

export default App
