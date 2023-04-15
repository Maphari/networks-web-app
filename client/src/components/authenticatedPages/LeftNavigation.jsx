import React, { useContext } from "react";
import { PassportContext } from "../../context/PassportContext";
// IMAGES LOGO
import LogoImage from "../../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";


export const LeftNavigation = () => {
  const Passport = useContext(PassportContext);
  const { data } = Passport || {};
  const navigate = useNavigate();
  const location = useLocation();
  const username = data?.name;
  const email = data?.email;
  const profile = data?.profilePicture;

  const handleLogout = async () => {
    localStorage.clear();
    navigate("/login", { replace: true });
    window.location.reload();
  };

  const cutUsernameIfLong = () => {
    if (username?.length > 12) {
      const modifiesUsername = username?.slice(0, 12) + "...";
      return modifiesUsername;
    } else {
      return username;
    }
  };

  const cutEmailifLong = () =>
    email?.slice(0, email.indexOf("@"))?.slice(0, 7) +
    "..." +
    email?.slice(email.indexOf("@"));


  return (
    <>
      <div className="leftnav-container drop-shadow-2xl">
        <div className="leftnav-container__top flex items-center mb-10">
          <img src={LogoImage} alt="logo" className="w-[36px]" />
          <h1 className="text-white font-bold text-2xl">
            etw<span className="color">ork.</span>
          </h1>
        </div>
        <div className="leftnav-container__profile flex items-center">
          {data?.user?.profilePicture ? (
            <img
              src={profile}
              alt="user profile picture"
              className="w-[40px] h-[40px] rounded-full object-cover mr-2"
            />
          ) : (
            <div className="bg-[#8abb3a] w-[40px] h-[40px] flex items-center justify-center rounded-full mr-2">
              <span className="font-bold text-white">
                {username?.slice(0, 2)}
              </span>
            </div>
          )}
          <div className="leftnav-container__profile-info flex flex-col flex-1">
            <h1 className="text-white font-[300] text-[15px] mb-1">
              {cutUsernameIfLong()}
            </h1>
            <h1 className="text-white font-[300] text-[13px] opacity-40">
              {cutEmailifLong()}
            </h1>
          </div>
        </div>

        <div className="my-6 flex flex-col flex-1">
          <h1 className="text-white text-[15px] font-[400] opacity-60">Menu</h1>
          <div className="my-3">
            <Link
              to="/dashboard"
              className={`${
                location.pathname === "/dashboard" ? "active" : ""
              } link pl-3 py-2 pr-2 flex items-center text-white hover:bg-[#07234D] hover:cursor-pointer rounded-lg mb-[0.5rem]`}
            >
              <i className="fa-solid fa-boxes-stacked text-xl mr-3"></i>
              <h1 className="font-[300] text-[0.9rem]">Dashboard</h1>
            </Link>
            <Link
              to="/maps"
              className={`${
                location.pathname === "/maps" ? "active" : ""
              } pl-3 py-2 pr-2 flex items-center link text-white hover:bg-[#07234D] hover:cursor-pointer rounded-lg mb-[0.5rem]`}
            >
              <i className="fa-solid fa-map-location-dot text-xl mr-3"></i>
              <h1 className="font-[300] text-[0.9rem]">Maps</h1>
            </Link>
            <Link
              to="/bankaccount"
              className={`${
                location.pathname === "/bankaccount" ? "active" : ""
              } pl-3 py-2 pr-2 flex items-center link text-white hover:bg-[#07234D] hover:cursor-pointer rounded-lg mb-1`}
            >
              <i className="fa-solid fa-wallet text-xl mr-3"></i>
              <h1 className="font-[300] text-[0.9rem]">Bank account</h1>
            </Link>

            <Link
              to="/addyours"
              className={`${
                location.pathname === "/addyours" ? "active" : ""
              } pl-3 py-2 pr-2 flex items-center link text-white hover:bg-[#07234D] hover:cursor-pointer rounded-lg mb-1`}
            >
              <i className="fa-solid fa-circle-plus text-xl mr-3"></i>
              <h1 className="font-[300] text-[0.9rem]">Add yours</h1>
            </Link>

            <Link
              to="/settings"
              className={`${
                location.pathname === "/settings" ? "active" : ""
              } pl-3 py-2 pr-2 flex items-center link text-white hover:bg-[#07234D] hover:cursor-pointer rounded-lg mb-1`}
            >
              <i className="fa-solid fa-gear text-xl mr-3"></i>
              <h1 className="font-[300] text-[0.9rem]">settings</h1>
            </Link>
          </div>
          <div className="my-6">
            <h1 className="text-white text-[15px] font-[400] opacity-60">
              Others
            </h1>
            <div className="my-3">
              <Link
                to="/report"
                className={`${
                  location.pathname === "/report" ? "active" : ""
                } pl-3 py-2 pr-2 flex items-center link text-white hover:bg-[#07234D] hover:cursor-pointer rounded-lg mb-1`}
              >
                <i className="fa-solid fa-flag text-xl mr-3"></i>
                <h1 className="font-[300] text-[0.9rem]">Report</h1>
              </Link>
              <Link
                to="/support"
                className={`${
                  location.pathname === "/support" ? "active" : ""
                } pl-3 py-2 pr-2 flex items-center link text-white hover:bg-[#07234D] hover:cursor-pointer rounded-lg mb-1`}
              >
                <i className="fa-solid fa-circle-info text-xl mr-3"></i>
                <h1 className="font-[300] text-[0.9rem]">support</h1>
              </Link>
              <Link
                to="/api/user_logout"
                onClick={handleLogout}
                className={`${
                  location.pathname === "/logout" ? "active" : ""
                } pl-3 py-2 pr-2 flex items-center link text-white hover:bg-[#07234D] hover:cursor-pointer rounded-lg mb-1`}
              >
                <i className="fa-solid fa-right-from-bracket text-xl mr-3"></i>
                <h1 className="font-[300] text-[0.9rem]">Logout</h1>
              </Link>
            </div>
          </div>
          <div className="pl-3 flex items-center">
            <i className="fa-solid fa-circle-check text-white pr-2"></i>
            <span className="text-white font-[300] i">{data?.clientID ? "Verified" : "Not verified"}</span>
          </div>
        </div>
      </div>
    </>
  );
};
