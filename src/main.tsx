import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./main.scss";
import ErrorPage from "./error-page";
import App from "./App";
import Item from "./pages/Item/item";
import List from "./pages/List/List.tsx";
import {ItemStoreProvider} from "./stores/ItemStoreContext.tsx";
import {AuthStoreProvider} from "./stores/AuthStoreContext.tsx";
import Account from "./pages/Account/Account.tsx";
import Cart from "./pages/Cart/Cart.tsx";
import Wishlist from "./pages/Wishlist/Wishlist.tsx";
import Checkout from "./pages/Checkout/Checkout.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/items/:itemId",
        element: <Item/>
    },
    {
        path: "/items",
        element: <List/>
    },
    {
        path: '/account',
        element: <Account/>
    },
    {
        path: '/cart',
        element: <Cart/>
    },
    {
        path: '/wishlist',
        element: <Wishlist/>
    },
    {
        path: '/checkout',
        element: <Checkout/>
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AuthStoreProvider>
            <ItemStoreProvider>
                <RouterProvider router={router}/>
            </ItemStoreProvider>
        </AuthStoreProvider>
    </React.StrictMode>
)
