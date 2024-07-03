import Header from "../components/header/header";
import BrandsSlider from "../components/brandsSlider/brandsSlider";
import Footer from "../components/footer/footer";
import React, {ReactNode} from "react";

interface IRoot {
    children: ReactNode;
}

const Root: React.FC<IRoot> = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <BrandsSlider/>
            <Footer/>
        </>
    )
}

export default Root;

