import {BrowserRouter,Routes,Route} from "react-router-dom"
import TopBar from "./components/topbar/TopBar";
import Register from "./components/register/Register";

 import  Login from"./components/login/Login"
function App() {
  return (
<BrowserRouter>
<TopBar/>

<Routes>
<Route path="/register" element={<Register/>}/>
<Route path="/login" element={<Login/>}/>
</Routes>

</BrowserRouter>
      );
}

export default App;
