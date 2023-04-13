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
  const spotifyToken = localStorage.getItem("spotify-token");

  useEffect(() => {
    if (googleToken != undefined) navigate("/dashboard", { replace: true });
    if (emailAndPasswordSession != undefined)
      navigate("/dashboard", { replace: true });
    if (spotifyToken != undefined) navigate("/dashboard", { replace: true });
  }, [emailAndPasswordSession, spotifyToken, googleToken]);

  useEffect(() => {
    const loader = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    return () => loader();
  }, []);

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
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
            path="/dashboard"
            element={
              emailAndPasswordSession !== null ||
              googleToken !== null ||
              spotifyToken !== null ? (
                <Home />
              ) : (
                <LandingPage />
              )
            }
          />
          <Route
            path="/"
            element={
              emailAndPasswordSession !== null ||
              googleToken !== null ||
              spotifyToken !== null ? (
                <Navigate to="/dashboard" replace={true} />
              ) : (
                <LandingPage />
              )
            }
          />
          <Route
            path="/register"
            element={
              emailAndPasswordSession !== null ||
              googleToken !== null ||
              spotifyToken !== null ? (
                <Navigate to="/dashboard" replace={true} />
              ) : (
                <Register />
              )
            }
          />
          <Route
            path="/login"
            element={
              emailAndPasswordSession !== null ||
              googleToken !== null ||
              spotifyToken !== null ? (
                <Navigate to="/dashboard" replace={true} />
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
