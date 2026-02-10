import axios, { Axios } from "axios";
import React, { useEffect, useRef, useState } from "react";

export default function GroceryList() {
    const inputRef = useRef(null)
    const [item, setitem] = useState("")
    const [list, setlist] = useState([])


    const handleadd = (e) => {
        setitem(e.target.value)
    }

    const handleget = async () => {
        let dataget = await axios.get("http://localhost:3000/todoList")
        setlist(dataget.data)
    }

    const handlepost = async () => {
        let body = {
            list: item
        }

        let datapost = await axios.post("http://localhost:3000/todoList", body)
        handleget()

    }

    const handledelete = async (id) => {
        let datadelete = await axios.delete("http://localhost:3000/todoList/" + id)
        handleget()


    }

    const handleedit = async (data) => {
        let dataedits = prompt("enter u name", data.list)

        let body = {
            id: data.id,
            list: dataedits
        }

        let datadelete = await axios.put("http://localhost:3000/todoList/" + data.id, body)

        handleget()

    }








    useEffect(() => {
        inputRef.current.focus()

    }, [])

    // useEffect(() => {
    //     handleget()

    // }, [])










    return (
        <div>
            <h1>grocerylist</h1>

            <input ref={inputRef} onChange={handleadd} placeholder="enter u name" />
        <button onClick={handlepost} type="button" class="btn btn-primary ms-2" >ADD{""}</button>


            {list.map((da, i) => (
                <div>
                    <h2>{i + 1}. {da.list}</h2>


                    <button onClick={() => handleedit(da)} class="btn btn-warning ms-2">EDITS{""}</button>
                    <button onClick={() => handledelete(da.id)} class="btn btn-danger ms-2">DELETE</button>

                </div>
            ))}

















        </div>




    )
}
