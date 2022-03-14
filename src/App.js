import Header from "./components/Header/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import SearchPage from "./pages/Search/SearchPage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import DetailPage from "./pages/Detail/DetailPage";
import CartPage from "./pages/Cart/CartPage";
import ContactPage from "./pages/Contact/ContactPage";
import Modal from "./components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import setHeaderAxios from "./utils/setHeaderAxios";
import axios from "axios";
import { base_auth } from "./api/config";
import { setUser } from "./redux/userReducer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      setHeaderAxios(token);
      getUser();
    }
  }, []);

  const getUser = async () => {
    try {
      const res = await axios.get(`${base_auth}/user`);
      dispatch(setUser({ userInfo: res.data.user, roles: res.data.rolesUser }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/detail/:id" element={<DetailPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/:type" element={<Menu />}></Route>
      </Routes>
      <Modal />
    </div>
  );
}

export default App;
