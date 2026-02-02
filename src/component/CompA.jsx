import react, { useContext } from "react"

import { CounterContext } from "./context/CounterContext"
import CompB from "./CompB"






function CompA(){

  const{count,handleadd}=useContext(CounterContext)

 

  

  
 
  




    return(

        <div>

          <h2>ONE-{count}</h2>
          <button onClick={handleadd}>CLICK</button>


          <CompB/>

           

         
          



         

        

        </div>

    )
}

export default CompA