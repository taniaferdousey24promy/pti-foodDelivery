import React, { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({children}) => {
    let [alldata, setData] = useState([]);

    useEffect(() => {
      fetch(
        "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
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