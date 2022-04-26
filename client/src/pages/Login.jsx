import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../style/login.scss"
import "../style/utils.scss"
import Avatar from "../images/img-01.png"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
     
    return (
	<>
	<Navbar/>
	<div class="limiter ">
		<div class="container-login100 py-5">
			<div class="wrap-login100 align-items-center justify-content-between">
				<div class="login100-pic " >
					<img src={Avatar} alt="IMG"></img>
				</div>

				<form class="login100-form " onSubmit={handleSubmit(onSubmit)} >
					<span class="login100-form-title">
						Member Login
					</span>

					<div class="wrap-input100 " >
						<input {...register("email")} class="input100" type="text"  placeholder="Email" autocomplete="new-password"></input>
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
						<label className="small fw-bold"> Remember me</label>
						<span class="focus-input100"></span>
					</div>
					
					<div class="container-login100-form-btn">
						<button type="submit" class="login100-form-btn">
							Login
						</button>
					</div>

					<div class="text-center p-t-12">
						<span class="txt1">
							Forgot
						</span>
						<a class="txt2 ps-2" href="#">
							Username / Password?
						</a>
					</div>

					<div class="text-center p-t-70">
						<a class="txt2" href="#">
							Create your Account
							<i class="bi bi-arrow-right ms-3" aria-hidden="true"></i>
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

export default Login

