import axios, { Axios } from "axios";
import React, { useEffect, useRef, useState } from "react";

export default function GroceryList() {

    const [item, setitem] = useState("")
    const [list, setlist] = useState([])

    const handleone = (e) => {
        setitem(e.target.value)

    };

   
    


    const handleget = async () => {
        let dataget = await axios.get("http://localhost:3000/todoList")
        setlist(dataget.data)
    };

    const handlepost = async () => {
        let body = {
            list: item
        };
        let getpost = await axios.post("http://localhost:3000/todoList", body);

       handleget()
    };


    const handleedits = async (data) => {
        let dataedits = prompt("enter u name", data.list)
        let body = {
            id: data.id,
            list: dataedits
        }
        let getedits = await axios.put("http://localhost:3000/todoList/" + data.id, body);

       handleget()
    };

    const handledelete = async (id) => {
        let datadelete = await axios.delete("http://localhost:3000/todoList/" + id)

        handleget()


    };




    return (
        <div>
            <h2>GROCERYLIST</h2>

            <input onChange={handleone} placeholder="enter" />
            <button onClick={handlepost} class="btn btn-primary ms-2">submit</button>


            {list.map((da, i) => (
                <div key={i}>
                   <h2>{i+1} .{da.list}</h2>

                    <button onClick={() => { handleedits(da) }} class="btn btn-warning ms-2">edits</button>
                    <button onClick={() => { handledelete(da.id) }} class="btn btn-danger ms-2">delete</button>
                </div>
            ))}

























        </div>
    )
}




