import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "../style/login.scss"
import "../style/utils.scss"
import Avatar from "../images/img-01.png"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import GoToTop from "../customHooks/GoToTop";



const Login = ({user}) => {
    const { register, handleSubmit } = useForm();
	const {Registerd, setRegistered} = useState(true);
    const onSubmit = data => console.log(data);

  
    return (
	<>
	<Navbar/>

	<div className="limiter ">
		<div className="container-login100 py-5">
			<div className="wrap-login100 align-items-center justify-content-center justify-content-lg-between">
				<div className="login100-pic " >
					<img src={Avatar} alt="IMG" ></img>
				</div>

				<form className="login100-form " onSubmit={handleSubmit(onSubmit)} >
					<span className="login100-form-title">
						Member Login
					</span>

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
						<label className="small fw-bold"> Remember me</label>
						<span className="focus-input100"></span>
					</div>
					
					<div className="container-login100-form-btn">
						<button type="submit" className="login100-form-btn">
							Login
						</button>
					</div>

					<div className="text-center p-t-12">
						<span className="txt1">
							Forgot
						</span>
						<a className="txt2 ps-2" href="#">
							Username / Password?
						</a>
					</div>

					<div className="text-center p-t-70">
						<a className="txt2" href="#">
							Create your Account
							<i className="bi bi-arrow-right ms-3" aria-hidden="true"></i>
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
	<GoToTop/>
	<Footer/>
	</>
  )
}

function mapStateToProps({user}){
	return{
		user
	}
}

export default connect(mapStateToProps)(Login)

