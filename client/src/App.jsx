import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import Home from "./pages/Home";

const App = () => {
  // const user = useSelector((state) => state.user.currentUser);
  const user = false;
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="products/:category" element={<ProductList />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="success" element={<Success />} />
          <Route
            path="login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
