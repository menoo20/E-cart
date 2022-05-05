import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Avatar from './CloudinaryImg/Avatar'
import {Logout} from "../Redux/actions/AuthActions"


const UserDropdown = ({id, avatar, drop, Logout}) => {

  const handleClick = async ()=>{
    
    await  Logout();
  }

  return (
    <div className="dropdown">
        <a className=" dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
            <Avatar avatar={avatar}/>
        </a>
        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
            <li><Link to={"#"} className="dropdown-item" href="#">My Account</Link></li>
            <li><Link to={"#"} className="dropdown-item" href="#">Orders</Link></li>
            <li><Link to={"#"} className="dropdown-item" href="#" onClick={handleClick}>Logout</Link></li>
        </ul>
     </div>
  )
}

const mapDispatchToProps = ({user})=>{
 return{
     id: user._id,
     avatar: user.avatar
 }
}

export default connect(mapDispatchToProps, {Logout}) (UserDropdown)