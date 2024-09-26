import React, { createContext } from 'react'

export const AppContext = createContext();

const ContextProvider = (props) => {
    const phone = "+1-994673673787";
    return (
        <AppContext.Provider value={phone}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider