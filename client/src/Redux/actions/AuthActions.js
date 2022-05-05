
import axios from "axios";
import {toast} from "react-toastify"
function Login(payload){
    return {
        type: "LOGIN",
        payload,
    }
}

function Register(payload){
    console.log("dispatching started")
    return {
        type: "REGISTER",
        payload,
    }
}

export  function Logout(){
    const logout = ()=>  toast.warning(`oops! You logged out`)
     logout();
    return{
        type: "LOGOUT"
    }
}


export const RegReq =  (data) => async dispatch => {
    const result = await axios.post("http://localhost:8000/api/auth/register",{
        data
    })
    try{
        if(result){
            console.log("server responded and the result coming back from axios is: ", result)
         await   dispatch(Register(
             
                {
                    fName:result.data.user.fName,
                    lName:result.data.user.lName,
                    avatar:result.data.user.avatar,
                    username: result.data.user.username,
                    successRegister: result.data.successfulRegister,
                    isAdmin: result.data.isAdmin,
                    accessToken: result.data.accessToken
                }
            ))
    }
    const success = ()=> toast.success(`Congratulation. You are now logged in as ${result.data.user.username} `)
    success()
    await dispatch(Login)
   
    }catch(err){
        
        // console.log(err)
    }
}


export const LoginReq =  (data) => async dispatch => {
    axios.post("http://localhost:8000/api/auth/login",{
        data
    }).then(response=>{
        console.log(response.data)
        const user = response.data;
        dispatch(Login(
             user
        ))
        const success = ()=> toast.success(`You are now logged in as ${user.username} `)
        return success()
    }).catch(err=>{
        console.log(err)
        if(err.response.data.message){
            const error = err.response.data.message
            const fail = ()=> toast.error(error)
            fail()
        }
    })
}