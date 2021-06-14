import React,{useState} from 'react'
import './Login.css'

function Login() {
    const [styleme, setstyleme] = useState(false)
    return (
        <div className="login_container">

 <div className={!styleme ?"login-left":"login-left1"}>
 <button onClick={()=>setstyleme(!styleme)}>Forget Password</button></div>
 
 
 <div className={!styleme ? "login-right":"login-right1"}>
    <div className={!styleme ? "loginbox-":"loginbox1"}>

        </div>
    </div>            
</div>
    )
}

export default Login
