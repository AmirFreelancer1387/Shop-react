import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/Shop";
import { ShopContextProvider } from "./context/shopContext";
import Signin from "./pages/form/Signin";
import { CircularProgress } from "@mui/material";
import Signup from "./pages/form/Signup";
import Wellcome from "./components/Wellcome";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress color="primary" />
      </div>
    );
  }

  return (
    <>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Wellcome />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </Router>

        {/*لطفا دقت کن -- اینجا ToastContainer را در کل پروژه فعال می‌کنیم */}
        <ToastContainer position="top-center" autoClose={2000} theme="colored" />
      </ShopContextProvider>
    </>
  );
}

export default App;
