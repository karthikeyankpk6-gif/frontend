import React, { useEffect, useMemo, useRef, useState } from "react";
import { Form, useForm } from "react-hook-form";


function Formone() {

  const inputref = useRef(null)
  const [name, setname] = useState("")
  const [age, setage] = useState("")

  const handleadd = (e) => {
    setname(e.target.value)
  }
  const handleone = (e) => {
    setage(e.target.value)
  }



  // useEffect(()=>{
  //   inputref.current.focus()

  // },[])






  return (

    <div>

      <label>NAME:</label>
      <input onChange={handleadd} placeholder="ENTER" />
      <br></br>
      <label>AGE</label>
      <input onChange={handleone} placeholder="ENTER" />
      <br></br>
      <button>SUBMIT</button>


      <h2>OUTPUT</h2>
      {name}{age}
























    </div>

  )
}

export default Formone