import axios, { Axios } from "axios";
import React, { useEffect, useRef, useState } from "react";

export default function GroceryList() {

    const [item, setitem] = useState("")
    const [list, setlist] = useState([])


    const handleadd = (e) => {
        setitem(e.target.value)
    }

    // useEffect(() => {
    //     handleget()


    // },[])


    const handleget = async () => {
        let dataget = await axios.get(" http://localhost:3000/todoList")
        setlist(dataget.data)
    }


    const handlepost = async () => {
        let body = {
            list: item
        }
        let datapost = await axios.post(" http://localhost:3000/todoList", body)

        handleget()

    }

    const handleedit = async (data) => {
        let dataedit = prompt("enter u name", data.list)
        let body = {
            id: data.id,
            list: dataedit

        }
        let dataedits = await axios.put(" http://localhost:3000/todoList/" + data.id, body)
        handleget()
    }

    const handledelete = async (id) => {
        let dataedits = await axios.delete(" http://localhost:3000/todoList/" + id)
        handleget()
    }






    return (
        <div>
            <h1>GROCERYLIST</h1>

            <input onChange={handleadd} placeholder="enter" />
            <button onClick={handlepost} class="btn btn-primary ms-2">SUBMIT</button>


            {list.map((da, i) => (
                <div>
                    <h3>{i + 1} .{da.list}</h3>
                    <button onClick={() => { handleedit(da) }} class="btn btn-warning ms-2" >edits</button>
                    <button onClick={() => { handledelete(da.id) }} class="btn btn-danger ms-2">delete</button>
                </div>
            ))}




























        </div>
    )



}
