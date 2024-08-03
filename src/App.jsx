import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import NavBar from "./components/NavBar/NavBar";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route element={<Products />} path="/products"></Route>
          <Route element={<Home />} path="/"></Route>
          <Route element={<Product />} path=":id"></Route>
          <Route element={<Cart />} path="/cart"></Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
