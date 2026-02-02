import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";


function Formtwo(){

    // const inputref = useRef(null);
    const{handleSubmit,register}=useForm()
    const[name,setname]=useState("")
    const[age,setage]=useState("")

    const handleadd=(data)=>{
        
        console.log(data)
    }


    

    // useEffect(()=>{
    //     inputref.current.focus()
    // },[])
    

    
  
   
    return(
        <div>

            <label>name:</label>
            <input {...register("first")} placeholder="enter"/>
            <br></br>
            <label>age:</label>
            <input {...register("second")} placeholder="enter"/>
            <br></br>
            <button onClick={handleSubmit(handleadd)}>submit</button>


            


            

         
        </div>
    )
}

export default Formtwo