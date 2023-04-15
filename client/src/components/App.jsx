import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Loader";
import { LandingPage } from "./LandingPage";
import { Home } from "./authenticatedPages/Home";
import { Register } from "./Register";
import { Login } from "./Login";
import Maps from "./authenticatedPages/Maps";
import BankAccount from "./authenticatedPages/BankAccount";
import AddYours from "./authenticatedPages/AddYours";
import Settings from "./authenticatedPages/Settings";
import Support from "./authenticatedPages/Support";
import Report from "./authenticatedPages/Report";

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
                <Login />
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
          <Route
            path="/maps"
            element={
              emailAndPasswordSession !== null ||
              googleToken !== null ||
              spotifyToken !== null ? (
                <Maps />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/bankaccount"
            element={
              emailAndPasswordSession !== null ||
              googleToken !== null ||
              spotifyToken !== null ? (
                <BankAccount />
              ) : (
                <Login />
              )
            }
          />
           <Route
            path="/addyours"
            element={
              emailAndPasswordSession !== null ||
              googleToken !== null ||
              spotifyToken !== null ? (
                <AddYours/>
              ) : (
                <Login />
              )
            }
          />
           <Route
            path="/settings"
            element={
              emailAndPasswordSession !== null ||
              googleToken !== null ||
              spotifyToken !== null ? (
                <Settings />
              ) : (
                <Login />
              )
            }
          />
           <Route
            path="/report"
            element={
              emailAndPasswordSession !== null ||
              googleToken !== null ||
              spotifyToken !== null ? (
                <Report />
              ) : (
                <Login />
              )
            }
          />
           <Route
            path="/support"
            element={
              emailAndPasswordSession !== null ||
              googleToken !== null ||
              spotifyToken !== null ? (
                <Support />
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
