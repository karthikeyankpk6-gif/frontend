import React, { useState } from 'react'






function Rollno(){

    const[count,setcount]=useState(0)
     const handleadd=()=>{
        setcount(count+1)
     }

   

    

    return(

        <div>

            <h1>COUNTING={count}</h1>

            <button onClick={handleadd}>click</button>

            

       


        </div>


    


    )
}


export default Rollno







