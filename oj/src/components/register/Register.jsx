import "./register.css"
import { Link } from "react-router-dom";
function Register()
{
return (
<div className="register">
    <span className="registerTitle">Register</span>
    <form  className="registerForm">
        <label >Username</label>
        <input type="text" placeholder="Enter your name" className="registerInput"/>
        <label >Email</label>
        <input type="text" placeholder="Enter your email" className="registerInput"/>
        
        <label >Password</label>
        <input type="text" placeholder="Enter your password" className="registerInput"/>
      <button className="registerButton" type="submit">Register</button>
    
    </form>
    <button className="registerLoginButton"><Link to="/login">Login</Link></button>
</div>


)
}

export default Register;