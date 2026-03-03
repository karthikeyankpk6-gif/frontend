import axios from "axios";
import react, { useRef, useState } from "react"
import { useEffect } from "react";
import { useForm } from "react-hook-form";


function ApiCallTwo() {
    const inputref=useRef(null);

    const { handleSubmit, register, formState: { errors } } = useForm()



    const handleadd = (data) => {
        console.log(data)


    }













    return (
        <div>
            <div class="login-container">
                <form class="login-form">
                    <h2>KRT 😀 </h2>

                    <div class="input-group">
                        <label>NAME</label>
                        <input ref={inputref} {...register("name", {
                            required: "name is required",
                            minLength: {
                                value: 3,
                                message: "name must be at least 3 letter"
                            }

                        })} />

                        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
                    </div>
                    <br />


                    <div class="input-group">
                        <label>AGE</label>
                        <input class="numbers" {...register("age", {
                            required: "age is required",
                            min: { value: 2, message: "age must be at least 2 letter" },
                            max: { value: 60, message: "age must be below 60" }
                        })} />

                        {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
                    </div>
                    <br />
                    <button onClick={handleSubmit(handleadd)} >SUBMIT</button>
                    <p class="register-link">
                        Don't have an account ? <a href="https://help.instagram.com/3257948324491837/?helpref=uf_share">Register</a>
                    </p>

                </form>
            </div>





















        </div>

    )

}
export default ApiCallTwo