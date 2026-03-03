import React, { useContext, useState } from 'react'
import { CounterContext } from './context/CounterContext'






function Rollno(){

    
    const[count,setcount]=useState(0)
     const handleadd=()=>{
        setcount(count+1)
     }

   

    

    return(

        <div>

            <h1>COUNTING={count}</h1>

            <button onClick={handleadd} class="btn btn-primary ms-2">click</button>

            

       


        </div>


    


    )
}


export default Rollno







