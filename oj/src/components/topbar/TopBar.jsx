import "./topbar.css"
import { Link } from "react-router-dom"
export default function TopBar()
{
    return (
        <div className="backImg">
        <div className="top">
               <div className="topLeft">
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-pinterest"></i>
                <i className="fa-brands fa-square-facebook"></i>
                <i className="fa-brands fa-square-instagram"></i>
               </div>
               <div className="topCenter">
                <ul className="topList">
                   <li className="topIcon"><Link to="/" className="topCh"> HOME</Link></li>
                   <li className="topIcon">Coding Playground</li>
                   <li className="topIcon">Questions</li>
                 
                </ul>
               </div>
               <div className="topRight">
                <ul className="topList">
                    <li className="topIcon"><Link to="/login" className="topChar">Login</Link></li>
                    <li className="topIcon"><Link to="/register" className="topChar">Register</Link></li>
                </ul>
               </div>
               
               
               </div>
               </div>
    )
}