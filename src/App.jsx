import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar'
import Name from './component/Name'
import Product from './component/Product'
import ApiCall from './component/ApiCall'
import "./App.css"
import Count from './component/Count'
import ApiCallTwo from './component/Apicalltwo'
import Formone from './component/Formone'
import Formtwo from './component/Formtwo'
import CompA from './component/CompA'
import { CounterProvider } from './component/context/CounterProvider'
import GroceryList from './component/GroceryList'
import 'bootstrap/dist/css/bootstrap.min.css';



function App(){

  

  

  
  return(
   <div>

   

    

   <CounterProvider>

    
  

  
  

    
   
   {/* <Navbar/>  */}

   {/* <Name/> */}

   {/* <Product/> */}

   {/* <Count/> */}



    {/* <ApiCall/> */}


    {/* <ApiCallTwo/> */}

    {/* <Formone/> */}

    {/* <Formtwo/> */}

    {/* <CompA/> */}
    {/* <GroceryList/> */}

<h1>karthikeyan</h1>
<h2>hello</h2>
   
</CounterProvider>








   




   </div>
  )
}
export default App