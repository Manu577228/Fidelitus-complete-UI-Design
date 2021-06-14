import React,{useState} from 'react'
import './Login.css'

function Login() {
    const [styleme, setstyleme] = useState(false)
    return (
<div className="login_container">

<div className={!styleme ?"login-left":"login-left1"}> 
<div className = "text"> 
         <p className = "welcome"> WELCOME BACK </p>
         <p className = "happy"> We're happy to see you again </p>
         <button className= "btn-1" type="button"  onClick={()=>setstyleme(!styleme)}>FORGOT PASSWORD</button>
       
    </div>
</div>

 <div className={!styleme ? "login-right":"login-right1"}>


<div className={!styleme ? "loginbox-":"loginbox1"}>


       </div>          
    </div>            
</div>

    );
}

export default Login
