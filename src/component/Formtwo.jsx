import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";


function Formtwo(){

    
    const{handleSubmit,register}=useForm()
    

    const handleadd=(data)=>{
        
        console.log(data)
    }
    



    

    // useEffect(()=>{
    //     inputref.current.focus()
    // })
    

    
  
   
    return(
        <div>

           <label>NAME:</label>
           <input {...register("name")}placeholder="enter" />
           <br/>
           <label>AGE:</label>
            <input {...register("age")}placeholder="enter"/>
            <br/>
            <button onClick={handleSubmit(handleadd)}>SUBMIT</button>


            


            

         
        </div>
    )
}

export default Formtwo