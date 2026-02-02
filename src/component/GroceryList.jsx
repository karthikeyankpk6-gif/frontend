import axios, { Axios } from "axios";
import React, { useEffect, useRef, useState } from "react";

export default function GroceryList() {
    const inputRef = useRef(null)

    const [item, setitem] = useState("")
    const [list, setlist] = useState([])
    const handleadd = (e) => {
        setitem(e.target.value)
    }



    useEffect(() => {
        inputRef.current.focus()

    }, [])

    // useEffect(()=>{
    //     handleget()
    // })

    const handleget = async () => {
        let apires = await axios.get(" http://localhost:3000/todoList")
        setlist(apires.data)
    }

    // const handleedit = async(da)=> {
    //     let edit = prompt("enter u rename",da.list)
    //     const body = {
    //         id: da.id,
    //         list: edit
    //     }

    //     let apires = await axios.put(" http://localhost:3000/todoList/"+da.id,body)
    //     handleget()

    // }








    const handleone=async()=>{
        let body={
            list:item 
        }
        let datapost = await axios.post(" http://localhost:3000/todoList",body)
        handleget()

            
       
    }

    // const handledelete = async (id) => {

    //     let apires = await axios.delete(" http://localhost:3000/todoList/" + id);


    //     handleget();


    // }









    return (
        <div>
            <h1>grocerylist</h1>

            <input ref={inputRef} onChange={handleadd} placeholder="enter" />
            <button onClick={handleone} type="button" class="btn btn-primary ms-3">add{""}</button>


            {list.map((da, i) => (
                <div key={i}>

                    <h4>{i + 1}. {da.list}</h4>


                    {/* <button onClick={() => handleedit(da)} type="button" class="btn btn-warning ms-3">edit{""}</button>
                    <button onClick={() => handledelete(da.id)} type="button" class="btn btn-danger ms-3">delete</button> */}



                </div>
            ))}












        </div>




        // </div>










    )
}