
import axios from "axios";
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
     await   dispatch(Register(
            {
                fName:result.data.fName,
                lName:result.data.lName,
                avatar:result.data.avatar,
                username: result.data.username,
                // isAdmin: result.data.isAdmin
            }
        ))
        
        
    }
}

