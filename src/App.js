import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home_page/Home";
import Login from "./pages/login_page/Login"
import Users from "./pages/users_page/Users";
import Single from "./pages/single_page/Single"
import NewUser from "./pages/newuser_page/NewUser";
const App = () =>{
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}/>
            <Route path="login" element={<Login />}/>
            <Route path="users" >
              <Route index element={<Users/>}/>
              <Route path=":userId" element={<Single />}/>
              <Route path="new" element={<NewUser />}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
