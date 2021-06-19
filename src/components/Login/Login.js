import React,{useState}from 'react'
import FormRight from '../FormRight';
import FormLeft from '../FormLeft';
import './Login.css'




function Login() {
const [styleme, setstyleme] = useState(false);


return (

<div className="login_container">

<div className={!styleme ?"login-left":"login-left1"}> 

<div className = "text"> 
         <p className = "welcome"> WELCOME BACK </p>
         <p className = "happy"> {!styleme ?  'We are happy to see you again' : 'Dont Worry if you forgot your password '}</p>
         {!styleme ? null :<p className= "happy1">we will help you</p>}
         <button className= "btn-1" type="button"  onClick={()=>setstyleme(!styleme)}>{!styleme ? 'FORGOT PASSWORD' : 'SIGN IN'}</button>
       
    </div>
</div>

 <div className={!styleme ? "login-right":"login-right1"}>
 
       
       
<div className={!styleme ? "loginbox-":"loginbox1"}>
{!styleme ? <FormRight /> : <FormLeft />}





       </div>          
    </div>            
</div>

    );
    
}

export default Login
