// IMAGES IMPORTS
import laptopImage from "../assets/laptop.png"
import { Link } from "react-router-dom";

export const Laptop = () => {
  return (
    <>
      <div className="laptop-container my-[2rem] mx-[5rem] flex items-center justify-between gap-3 flex-wrap">
        <div className="flex flex-col justify-center inner">
          <h1 className="font-bold mb-3 inner-head" style={{fontSize: '3rem'}}>The network features are <br/><span className="color">amazing</span></h1>
          <p className="opacity-60 mb-3 inner-para">
            We are waiting for you on the other side the features <br/>are amazing
            and user friendly.
          </p>
          <Link className="a aa font-[500] border border-[#8ABB3A] p-[0.7rem] text-md hover:text-gray-600 w-[20%] text-center">Learn More</Link>
        </div>
        <img src={laptopImage} alt="laptop showing website" className="w-[40rem] min-w-[15rem] object-contain"/>
      </div>
    </>
  );
};
