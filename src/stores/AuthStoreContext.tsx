import React, {createContext, useContext} from 'react';
import {authStore} from './AuthStore';

export const AuthStoreContext = createContext(authStore);

export const AuthStoreProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <AuthStoreContext.Provider value={authStore}>
            {children}
        </AuthStoreContext.Provider>
    );
};

export const useAuthStore = () => useContext(AuthStoreContext);
