import Home from "./Home";
import Product from "./Product";
import Orders from "./Orders";
import Statistic from "./Statistic";
import AccessDenied from "./AccessDenied";
import ErrorPage from "../ErrorPage/ErrorPage";
import { Navigate, Route, Routes } from "react-router-dom";
import Account from "./Account";
import NavBar from "../../layout/NavBar";
import { useSelector } from "react-redux";

const Admin = () => {
  const { user } = useSelector((state) => state.user);

  if (user.roles.length <= 2) {
    return <Navigate to={"/"} />;
  }

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Product />} />
        <Route path='/account' element={<Account />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/statistic' element={<Statistic />} />
        <Route path='/access-denied' element={<AccessDenied />} />
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
};

export default Admin;
