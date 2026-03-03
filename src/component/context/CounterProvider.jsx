import React, { Children, useState } from "react";
import { CounterContext } from "./CounterContext";


export const CounterProvider=( {children})=>{

    const[count,setcount]=useState(0)

    const handlecount=()=>{
        setcount(count+1)

    }



    return(
        <diV>
            <CounterContext.Provider value={{count,handlecount}}>

                {children}

            </CounterContext.Provider>
        </diV>
    )











}

    



























