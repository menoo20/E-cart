import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "../style/Register.scss"
import "../style/utils.scss"
import CardProfile from "../components/CardUploader";
import Bg from "../images/bg.jpg"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import { RegReq } from "../Redux/actions/AuthActions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    fName: yup.string().required("Please Enter Your Firsname"),
    username: yup.string().required("We need A username").min(4).max(30),
    email: yup.string().required("What's Your Email?!").email(),
    password: yup.string().required("password is required").matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  }).required();


function Register(props) {
    const [file, setFile] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
      });
    
    const navigate = useNavigate();

    //toast arguments
    const toastId = React.useRef(null);

    const successify = () => toastId.current = toast.loading("please wait ...")
  
    const dismiss = () =>  toast.dismiss(toastId.current);

    let timeout;
    const onSubmit = async ({ fName, lName, email, password, username }) => {
        const data = {
            fName,
            lName,
            username,
            email : email.toLowerCase(),
            password,
            avatar: file,
        };
        timeout = setTimeout(successify, 0);
        props.RegReq(data);
        setTimeout(dismiss,6000)
    };

    const {user} = props;

    useEffect(()=>{
        if(user){
            navigate("/")
        }

    },[user])

    const passwordError = ()=>{
        if(errors.password){
            if(errors.password.message.includes("password is required")){
                return (<p className={`error position-absolute small ${errors.password?"active":""}`}>
                    {errors.password?<i className="bi bi-info-circle me-2"></i>:""}
                    {errors.password?.message}
                    </p>)
            }else{
                return (<p className={`error position-absolute small ${errors.password?"active":""}`}
                   style={{fontSize: "10.5px", bottom: "-40px"}}>
                    {errors.password?<i className="bi bi-info-circle me-2"></i>:""}
                    {errors.password?.message}
                </p>)
            }

        }
    }
    return (
        <>
        <Navbar />
        <div className="limiter ">
            <div className="container-login100 py-5" style={{ backgroundImage: `url(${Bg})` }}>
                <div className="wrap-login100">
                    <form className="login100-form gap-4" onSubmit={handleSubmit(onSubmit)}>
                        <span className="login100-form-title">
                            Register
                        </span>

                        <CardProfile register={register} setFile={setFile} />

                        <div className="wrap-input100  position-relative">
                            <input {...register("fName")} className="input100" type="text" placeholder="First Name" autoComplete="new-password" ></input>
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="bi bi-card-text" aria-hidden="true"></i>
                            </span>
                            <p className={`error position-absolute ${errors.fName?"active":""}`}>{errors.fName?<i className="bi bi-info-circle me-2"></i>:""}{errors.fName?.message}</p>
                        </div>

                        <div className="wrap-input100  position-relative">
                            <input {...register("lName")} className="input100" type="text" placeholder="Last Name" ></input>
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="bi bi-card-heading" aria-hidden="true"></i>
                            </span>

                        </div>

                        <div className="wrap-input100  position-relative">
                            <input {...register("username")} className="input100" type="text" placeholder="pick a username" ></input>
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="bi bi-card-heading" aria-hidden="true"></i>
                            </span>
                            <p className={`error position-absolute ${errors.email?"active":""}`}>{errors.username?<i className="bi bi-info-circle me-2"></i>:''}{errors.username?.message}</p>
                        </div>

                        <div className="wrap-input100  position-relative">
                            <input {...register("email")} className="input100" type="email" placeholder="Email"></input>
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="bi bi-envelope-fill" aria-hidden="true"></i>
                            </span>
                            <p className={`error position-absolute ${errors.email?"active":""}`}>{errors.email?<i className="bi bi-info-circle me-2"></i>:""}{errors.email?.message}</p>
                        </div>

                        <div className="wrap-input100  position-relative">
                            <input {...register("password")} className="input100" type="password" placeholder="Password" ></input>
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="bi bi-shield-lock-fill" aria-hidden="true"></i>
                            </span>
                            {/* <p className={`error position-absolute small ${errors.password?"active":""}`}>{errors.password?<i className="bi bi-info-circle me-2"></i>:""}{errors.password?.message}</p> */}
                            {passwordError()}
                        </div>

                        <div className="input-group my-4">
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
        <Footer />
    </>
    );

}

function mapStateToProps({user}){
    return{
        user,
    }

}

export default connect(mapStateToProps,{RegReq})(Register)









