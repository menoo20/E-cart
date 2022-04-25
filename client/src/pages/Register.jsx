import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../style/Register.scss"
import "../style/utils.scss"
import CardProfile from "../components/CardUploader";
import Bg from "../images/bg.jpg"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Register = () => {

   const { register, handleSubmit } = useForm();
   const onSubmit = data => console.log(data);
   const handleChange= (e)=>{
       console.log(e.target.files)
   }

   


  return (
    <>
    <Navbar/>
    <div className="limiter ">
    <div className="container-login100 py-5" style={{backgroundImage: `url(${Bg})`}}>
        <div className="wrap-login100">
            <form className="login100-form " onSubmit={handleSubmit(onSubmit)} >
                <span className="login100-form-title">
                    Register
                </span>

                <CardProfile register={register}/>

                <div className="wrap-input100 " >
                    <input {...register("firstname")} className="input100" type="text"  placeholder="First Name" autoComplete="new-password"></input>
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                        <i className="bi bi-card-text" aria-hidden="true"></i>
                    </span>
                </div>

                <div className="wrap-input100 " >
                    <input {...register("lastname")} className="input100" type="text"  placeholder="Last Name" autoComplete="new-password"></input>
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                        <i className="bi bi-card-heading" aria-hidden="true"></i>
                    </span>
                </div>

                <div className="wrap-input100 " >
                    <input {...register("email")} className="input100" type="text"  placeholder="Email" autoComplete="new-password"></input>
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                        <i className="bi bi-envelope-fill" aria-hidden="true"></i>
                    </span>
                </div>

                <div className="wrap-input100 " >
                    <input {...register("password")} className="input100" type="password"  placeholder="Password"></input>
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                        <i className="bi bi-shield-lock-fill" aria-hidden="true"></i>
                    </span>
                </div>
                
                <div className="input-group my-4" >
                    <input {...register("remember")} className="me-3 " type="checkbox" style={{
                        transform: "scale(1.4)"
                    }}></input>
                    <label className="small fw-bold text-capitalize"> Remember me</label>
                    <span className="focus-input100"></span>
                </div>
                
                <div className="container-login100-form-btn">
                    <button type="submit" className="login100-form-btn">
                        Register
                    </button>
                </div>

                <div className="text-center ">
                    <span className="txt1">
                        Already have an account
                    </span>
                    <a className="txt2 ps-2" href="#">
                        sign in
                    </a>
                </div>
            </form>
        </div>
    </div>
</div>
<Footer/>
</>
  )

}

export default Register









