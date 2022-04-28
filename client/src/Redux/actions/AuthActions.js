
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

function Logout(){
    return{
        type: "LOGOUT"
    }
}


export const RegReq =  (data) => async dispatch => {
    const result = await axios.post("http://localhost:8000/api/auth/register",{
        data
    })
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
      const success = ()=> toast.success(`Congratulation. You are now logged in as ${result.data.user.fName} `)
      success()
      await dispatch(Login)
    }
}

