import React, { useEffect, useMemo, useRef, useState } from "react";
import { Form, useForm } from "react-hook-form";


function Formone() {

  const inputref = useRef(null)

  const [name, setname] = useState("")
  const [age, setage] = useState("")

  const handlename = (e) => {
    setname(e.target.value)

  }
  const handleeage = (e) => {
    setage(e.target.value)

  }





  useEffect(()=>{
    inputref.current.focus()

  },[])






  return (

    <div>

      <label>NAME:</label>
      <input ref={inputref} onChange={handlename} placeholder="enter" />
      <br/>
      <label>AGE:</label>
      <input onChange={handleeage} placeholder="enter" />
      <br/>
      <button class="btn btn-primary ms-2">SUBMIT</button>



      <h3>OUTPUT</h3>

      <h2>{name}{age}</h2>





























    </div>

  )
}

export default Formone