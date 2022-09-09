import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home_page/Home";
import Login from "./pages/login_page/Login"
import Users from "./pages/users_page/Users";
import Single from "./pages/single_page/Single"
import NewUser from "./pages/newuser_page/NewUser";
import Product from "./pages/product_page/Product";
import { userInputs, productInputs } from "./formDataSource";
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
              <Route path="new" element={<NewUser title="ADD NEW USER." inputs={userInputs}/>}/>
            </Route>
            <Route path="products" >
              <Route index element={<Product/>}/>
              <Route path="new" element={<NewUser title="ADD NEW PRODUCT." inputs={productInputs}/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
