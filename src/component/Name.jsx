import React, { useState } from "react";



function Name() {

    const [name, setname] = useState("zoro")

    const handlename = () => {

        if(name=="luffy")
            setname("zoro")

          else
            setname("luffy")
            
        



       
    }

    return (

        <div>
            <h1>{name}</h1>


            <button onClick={handlename}>change</button>



        </div>
    )
}

export default Name