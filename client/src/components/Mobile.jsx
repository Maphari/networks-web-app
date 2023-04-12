// IMAGES IMPORTS
import mobileImage from "../assets/mobile.png";
import { Link } from "react-router-dom";

export const Mobile = () => {
  return (
    <>
      <div className="laptop-container my-[2rem] mx-[5rem] flex items-center justify-between gap-3 flex-wrap">
        <div className="flex flex-col justify-center inner">
          <h1 className="font-bold mb-3 inner-head" style={{fontSize: '3rem'}}>
            Mobile application <br />coming <span className="color">SOON</span>
          </h1>
          <p className="opacity-60 mb-3 inner-para">
            we want to bring Request to your mobile devices so<br/> that you do the
            honor where ever you are
          </p>
          <Link className="a aa font-[500] border border-[#8ABB3A] p-[0.7rem] text-md hover:text-gray-600 w-[30%] text-center">
            Learn More
          </Link>
        </div>
        <img
          src={mobileImage}
          alt="laptop showing website"
          className="w-[45rem] object-contain min-w-[15rem]"
        />
      </div>
    </>
  );
};
