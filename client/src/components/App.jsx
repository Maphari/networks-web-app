import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Loader";
import { LandingPage } from "./LandingPage";
import { Home } from "./authenticatedPages/Home";
import { Register } from "./Register";
import { Login } from "./Login";

export default function App() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const emailAndPasswordSession = localStorage.getItem("token");
  const googleToken = localStorage.getItem("google-token");

  useEffect(() => {
    if (googleToken != undefined) navigate("/home", { replace: true });
    if (emailAndPasswordSession != undefined)
      navigate("/home", { replace: true });
    const loader = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    return () => loader();
  }, [googleToken, emailAndPasswordSession]);

  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route
            path="/home"
            element={
              emailAndPasswordSession !== null || googleToken !== null ? (
                <Home />
              ) : (
                <LandingPage />
              )
            }
          />
          <Route
            path="/"
            element={
              emailAndPasswordSession !== null || googleToken !== null ? (
                <Navigate to="/home" replace={true} />
              ) : (
                <LandingPage />
              )
            }
          />
          <Route
            path="/register"
            element={
              emailAndPasswordSession !== null || googleToken !== null ? (
                <Navigate to="/home" replace={true} />
              ) : (
                <Register />
              )
            }
          />
          <Route
            path="/login"
            element={
              emailAndPasswordSession !== null || googleToken !== null ? (
                <Navigate to="/home" replace={true} />
              ) : (
                <Login />
              )
            }
          />
        </Routes>
      )}
    </>
  );
}
