import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NewProduct from "./pages/newProduct/NewProduct";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import ProductList from "./pages/productList/ProductList";
import User from "./pages/user/User";
import UserList from "./pages/userList/UserList";

function App() {
  // const admin = useSelector((state) => state.user.currentUser.isAdmin);
  const admin = true;
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={admin ? <Home /> : <Navigate to="/login" />} />
          <Route path="users" element={<UserList />} />
          <Route path="user/:userId" element={<User />} />
          <Route path="newUser" element={<NewUser />} />
          <Route path="products" element={<ProductList />} />
          <Route path="product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
        </Route>
        <Route
          path="/login"
          element={admin ? <Navigate to="/" /> : <Login />}
        />
      </Routes>
    </Router>
  );
}

export default App;
