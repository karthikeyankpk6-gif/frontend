import react, { useState } from "react"
import { useEffect } from "react";


 function ApiCallTwo(){

    const[apidata,setapidata]=useState([])

   



    const handlea = () =>{


        console.log("creatinggggg");

    }

     useEffect(()=>{

        handlea()

      
      

      return()=>{
        console.log("deads");
      }
     },[]);
      
    return(
        <div>
            <h1>lion</h1>

           
           

           

        </div>
       
    )
    
}
export default ApiCallTwo