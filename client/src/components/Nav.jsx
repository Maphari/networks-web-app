// IMAGES IMPORTS
import Logo from "../assets/logo.png";
// REACT-ROUTER-DOM IMPORTS
import { Link } from "react-router-dom";
import { ScrollReveal } from "reveal-on-scroll-react";

export const Nav = () => {
  return (
    <>
      <div className="navigation-container">
        <div className="navigation-container-inner mx-[1rem]">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="w-[2.3rem] object-cover" />
            <h1 className="font-bold text-xl">
              etw<span className="color">ork.</span>
            </h1>
          </div>
          <Link
            to="/register"
            className="font-[500] border border-[#8ABB3A] p-[0.7rem] text-md link"
          >
            GET STARTED
          </Link>
        </div>

        <ScrollReveal.div animation="fade-in" easing="easeInOut" duration="1.5" delay="0" className="navigation-container__info my-10">
          <h1 className="navigation-container__info-header font-bold">
            <span className="color">Build</span> your own network with us.
            <span className="color"> Network</span> brings
            <br /> the digital services with more
            <br /> <span className="color"> features.</span>
          </h1>
          <p className="opacity-50 font-[300] my-2">
            amazing features awaits for you get started
          </p>
          <div className="socials">
            <i className="fa-brands fa-facebook py-1 px-2 rounded text-lg"></i>
            <i className="fa-brands fa-instagram py-1 px-2 rounded text-lg"></i>
            <i className="fa-brands fa-twitter py-1 px-2 rounded text-lg"></i>
            <i className="fa-brands fa-youtube py-1 px-2 rounded text-lg"></i>
          </div>
        </ScrollReveal.div>
      </div>
    </>
  );
};
