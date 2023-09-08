import "./topbar.css"
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
                   <li className="topIcon">Home</li>
                   <li className="topIcon">Coding Playground</li>
                   <li className="topIcon">Questions</li>
                 
                </ul>
               </div>
               <div className="topRight">
                <ul className="topList">
                    <li className="topIcon">Login</li>
                    <li className="topIcon">Register</li>
                </ul>
               </div>
               
               
               </div>
               </div>
    )
}