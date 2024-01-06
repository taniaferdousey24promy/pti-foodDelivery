import { useContext } from "react";
import { AppContext } from "../../../AppProvider/AppProvider";


// import React, { useEffect, useState } from "react";
const Popular = () => {
    const name = useContext(AppContext);
    console.log(name)



  return <p>hei</p>;

};

export default Popular;
