import React from "react";
import {itemStore, ItemStore} from './ItemsStore.ts'

export const ItemStoreContext = React.createContext<ItemStore | null>(null);

export const ItemStoreProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <ItemStoreContext.Provider value={itemStore}>
            {children}
        </ItemStoreContext.Provider>
    );
};
