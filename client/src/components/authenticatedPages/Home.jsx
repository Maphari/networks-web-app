import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Home = () => {
  const navigate = useNavigate();

  const toastNotification = (message) => {
    toast(message);
  };

  const handleLogout = async () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  };

  return (
    <>
      <h1>home</h1>
      <button
        type="submit"
        className="bg-red-500 text-white p-2"
        onClick={handleLogout}
      >
        Logout
      </button>
    </>
  );
};
