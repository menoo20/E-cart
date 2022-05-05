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
import { Link, useNavigate } from "react-router-dom";
import { LoginReq } from "../Redux/actions/AuthActions";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    email: yup.string().required("Can't Be Empty").email("Must Be email form with @ and ."),
	password: yup.string().required("Please Enter Your Password")
  }).required();


const Login = ({user, LoginReq}) => {
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
      });
	const {Registerd, setRegistered} = useState(true);
	const navigate = useNavigate()
	
	//toast arguments
	const toastId = React.useRef(null);

    const check = () => toastId.current = toast.loading("please wait ...")
  
    const dismiss = () =>  toast.dismiss(toastId.current);
    
	let timeout;
    const onSubmit = async data => {
	 timeout = setTimeout(check, 0);
	 await	LoginReq(data);
	 setTimeout(dismiss)
	}

  
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
						<input {...register("email")} className="input100" type="text"  placeholder="Email" ></input>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="bi bi-envelope-fill" aria-hidden="true"></i>
						</span>
						<p className={`error position-absolute ${errors.email?"active":""}`}>{errors.email?<i className="bi bi-info-circle me-2"></i>:""}{errors.email?.message}</p>
					</div>

					<div className="wrap-input100 mt-4" >
						<input {...register("password")} className="input100" type="password"  placeholder="Password"></input>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="bi bi-shield-lock-fill" aria-hidden="true"></i>
						</span>
						<p className={`error position-absolute ${errors.password?"active":""}`}>{errors.password?<i className="bi bi-info-circle me-2"></i>:""}{errors.password?.message}</p>
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
						<Link to="/register" className="txt2">
							Create your Account
							<i className="bi bi-arrow-right ms-3" aria-hidden="true"></i>
						</Link>
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

export default connect(mapStateToProps, {LoginReq})(Login)

