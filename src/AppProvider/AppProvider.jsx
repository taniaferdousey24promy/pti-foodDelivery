import React, { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({children}) => {
    let [alldata, setData] = useState([]);

    useEffect(() => {
      fetch(
        "food.json"
      )
        .then((res) => res.json())
        .then((data) => setData(data.Items));
    }, []);
    console.log(alldata);
    return (
            <AppContext.Provider value={alldata}>
                {children}
            </AppContext.Provider>
            
    );
};

export default AppProvider;