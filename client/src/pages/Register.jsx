import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../style/Register.scss"
import "../style/utils.scss"
import CardProfile from "../components/CardUploader";
import Bg from "../images/bg.jpg"

const Register = () => {

   const { register, handleSubmit } = useForm();
   const onSubmit = data => console.log(data);
   const handleChange= (e)=>{
       console.log(e.target.files)
   }

   


  return (
    <div class="limiter ">
    <div class="container-login100 py-5" style={{backgroundImage: `url(${Bg})`}}>
        <div class="wrap-login100">
            <form class="login100-form " onSubmit={handleSubmit(onSubmit)} >
                <span class="login100-form-title">
                    Register
                </span>

                <CardProfile register={register}/>

                <div class="wrap-input100 " >
                    <input {...register("firstname")} class="input100" type="text"  placeholder="First Name" autoComplete="new-password"></input>
                    <span class="focus-input100"></span>
                    <span class="symbol-input100">
                        <i class="bi bi-card-text" aria-hidden="true"></i>
                    </span>
                </div>

                <div class="wrap-input100 " >
                    <input {...register("lastname")} class="input100" type="text"  placeholder="Last Name" autoComplete="new-password"></input>
                    <span class="focus-input100"></span>
                    <span class="symbol-input100">
                        <i class="bi bi-card-heading" aria-hidden="true"></i>
                    </span>
                </div>

                <div class="wrap-input100 " >
                    <input {...register("email")} class="input100" type="text"  placeholder="Email" autoComplete="new-password"></input>
                    <span class="focus-input100"></span>
                    <span class="symbol-input100">
                        <i class="bi bi-envelope-fill" aria-hidden="true"></i>
                    </span>
                </div>

                <div class="wrap-input100 " >
                    <input {...register("password")} class="input100" type="password"  placeholder="Password"></input>
                    <span class="focus-input100"></span>
                    <span class="symbol-input100">
                        <i class="bi bi-shield-lock-fill" aria-hidden="true"></i>
                    </span>
                </div>
                
                <div class="input-group my-4" >
                    <input {...register("remember")} className="me-3 " type="checkbox" style={{
                        transform: "scale(1.4)"
                    }}></input>
                    <label className="small fw-bold text-capitalize"> Remember me</label>
                    <span class="focus-input100"></span>
                </div>
                
                <div class="container-login100-form-btn">
                    <button type="submit" class="login100-form-btn">
                        Register
                    </button>
                </div>

                <div class="text-center ">
                    <span class="txt1">
                        Already have an account
                    </span>
                    <a class="txt2 ps-2" href="#">
                        sign in
                    </a>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default Register








