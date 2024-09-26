import React, { createContext } from 'react'

export const AppContext = createContext();

const ContextProvider = (props) => {
    const phone = "+1-994673673787";
    const name = "Praveen Singh";
    return (
        <AppContext.Provider value={{phone, name}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider