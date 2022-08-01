import React, { useState, createContext } from 'react';
import { useLocalStorage } from './useLocalStorage';

const GlobalContext = createContext()

function GlobalProvide( {children}) {
    const [pageState, setPageState] = useState("Home");
    
    const value = {
        pageState,
        setPageState,
    }
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}
fasdfashdfui
export {GlobalContext, GlobalProvide}
