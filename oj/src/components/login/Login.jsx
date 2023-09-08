import "./login.css"
import { Link } from "react-router-dom";
function Login()
{
return (
<div className="login">
    <span className="loginTitle">Login</span>
    <form  className="loginForm">
        
        <label >Email</label>
        <input type="text" placeholder="Enter your email" className="loginInput"/>
        
        <label >Password</label>
        <input type="text" placeholder="Enter your password" className="loginInput"/>
      <button className="loginButton" type="submit">Login</button>
    
    </form>
    <button className="loginRegisterButton"><Link to="/register">Register</Link></button>
</div>


)
}

export default Login;