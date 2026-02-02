import React, { useState } from "react";


function Product() {


    // const [data] = useState(["luffy", "zoro", "do", "the"])

    const [data]=useState([
        {
            name:"anjaan",
            age:35,
        },
        {
            name:"twentyfour",
            age:56,
        }

])
    

    






    return (

        <div>








            {data.map((da)=>(

                
                




                    <div>
                        <h1>name={da.name}</h1>
                        <h2>age={da.age}</h2>
                        <hr></hr>

                    </div>

                ))
}















        </div>


    )

}








export default Product





