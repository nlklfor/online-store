import Header from "../components/header/header";
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
            <Footer/>
        </>
    )
}

export default Root;

