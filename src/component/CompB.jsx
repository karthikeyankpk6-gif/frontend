import React, { useContext } from "react";
import { CounterContext } from "./context/CounterContext";





export default function CompB(){

   const{count}=useContext(CounterContext)

   
  
   







    return(

        <div>

            <h1>TWO-{count}</h1>
            


        

        </div>


    )
}