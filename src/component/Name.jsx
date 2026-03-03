import React, { useState } from "react";



function Name() {

    const[item,setitem]=useState("anjaan")

    const handleadd=()=>{

        if(item=="anjaan"){
            setitem("krt")

        }
        else{
            setitem("anjaan")
        }

    }


       
    

    return (

        <div>

           <h2>{item}</h2>
            <button onClick={handleadd} class="btn btn-primary">ADD</button>
            



        </div>
    )
}

export default Name