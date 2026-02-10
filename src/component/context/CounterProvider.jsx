import React, { Children, useState } from "react";
import { CounterContext } from "./CounterContext";


export const CounterProvider = ({children}) => {

    const [count, setcount] = useState(0)

    const handleadd = () => {
        setcount(count + 1)
    }






    return (
        <div>

           



            <CounterContext.Provider value={{count, handleadd }}>
                {children}

            </CounterContext.Provider>









        </div>

    )




}






















