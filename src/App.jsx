import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar'
import Name from './component/Name'
import Product from './component/Product'
import ApiCall from './component/ApiCall'
import "./App.css"
import Count from './component/Count'
import Formone from './component/Formone'
import Formtwo from './component/Formtwo'
import ApiCallTwo from './component/ApiCallTwo'
import CompA from './component/CompA'
import { CounterProvider } from './component/context/CounterProvider'
import GroceryList from './component/GroceryList'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'



function App() {






  return (
    <div>

      <CounterProvider>










      {/* <BrowserRouter> */}



        {/* <Count /> */}

        {/* <Navbar/>  */}

        {/* <Name/> */}

        {/* <Product/> */}

        {/* <CompA/> */}

         {/* <Navbar/>  */} 


          {/* <Link to="/">home/</Link>
         <Link to="/Navbar">Navbar/</Link>
          <Link to="/Count">Count</Link>

         

<Routes>

  <Route element={ <Name/>} path="/"/>
  <Route element={ <Navbar/>} path="/Navbar"/>
  <Route element={ <Count />} path="/Count"/>
  


</Routes> */}

        



       
    
    



        <ApiCall/>

       {/* <ApiCallTwo/> */}


       

        {/* <Formone /> */}

        {/* <Formtwo/> */}


        {/* <GroceryList /> */}




















      {/* </BrowserRouter> */}

      </CounterProvider>


    </div>

  )

}
export default App