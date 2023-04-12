// IMAGES IMPORTS
import servicesImage from "../assets/services.png";
import sellEverywhereImage from "../assets/selleverywhere.png";
import socialsImage from "../assets/socials.png";
import networkImage from "../assets/network.png";
import { Link } from "react-router-dom";

export const AppShowcase = () => {
  return (
    <>
      <div className="appshowcase-container">
        <div>
          <h1 className="font-bold text-4xl header">
            Most offered <span className="color">categories</span>
          </h1>
          <p className="opacity-50 para">Most offered category in network</p>
        </div>
        <div className="flex items-center gap-2 mt-8 flex-wrap">
          <div className="bg-[#050505] rounded-xl flex items-center gap-1 text-white py-1 px-[0.3rem] h-[3.1rem] div">
            <div className="flex items-center justify-center rounded-lg bg-[#8ABB3A] p-2 h-[2.5rem] w-[2.5rem]">
              <i className="fa-solid fa-gear text-xl"></i>
            </div>
            <h1 className="font-[400] px-1 text-md">Rent services</h1>
          </div>
          <div className="bg-[#050505] rounded-xl flex items-center gap-1 text-white py-1 px-[0.3rem] h-[3.1rem] div">
            <div className="flex items-center justify-center rounded-lg bg-[#8ABB3A] p-2 h-[2.5rem] w-[2.5rem]">
              <i className="fa-solid fa-wallet text-xl"></i>
            </div>
            <h1 className="font-[400] px-1 text-md">Create bank account</h1>
          </div>
          <div className="bg-[#050505] rounded-xl flex items-center gap-1 text-white py-1 px-[0.3rem] h-[3.1rem] div">
            <div className="flex items-center justify-center rounded-lg bg-[#8ABB3A] p-2 h-[2.5rem] w-[2.5rem]">
              <i className="fa-solid fa-circle-plus text-xl"></i>
            </div>
            <h1 className="font-[400] px-1 text-md">create your services</h1>
          </div>
        </div>

        <div className="appshowcase-container__bottom mt-[3rem] flex flex-col gap-14">
          <div className="appshowcase-container__bottom-info flex gap-5 flex-wrap">
            <img
              src={servicesImage}
              alt="images for rent services"
              className="w-[18rem]"
            />
            <div className="flex justify-center flex-col items-start">
              <h1 className="font-bold text-3xl mb-4">
                Rent <span className="color">services</span>
              </h1>
              <p className="mb-4 max-w-[43rem]">
                Request for help to one of our agent it might be, help with
                assignments, daily activities like taking clothes to laundry or
                you want a technician also you can register your own company
              </p>
              <Link className="aa font-[500] border border-[#8ABB3A] p-[0.7rem] text-md hover:text-gray-600">
                Learn more
              </Link>
            </div>
          </div>

          <div className="appshowcase-container__bottom-info flex flex-wrap gap-5">
            <img
              src={sellEverywhereImage}
              alt="image for sell everywhere"
              className="w-[18rem]"
            />
            <div className="flex justify-center flex-col items-start">
              <h1 className="font-bold text-3xl mb-4">
                Sell <span className="color">anywhere</span>
              </h1>
              <p className="mb-4 max-w-[43rem]">
                networks makes it easy for you to connect to your customers
                everywhere they are with just a click of a button. Then we will
                take care of everything
              </p>
              <Link className="aa font-[500] border border-[#8ABB3A] p-[0.7rem] text-md hover:text-gray-600">
                Learn more
              </Link>
            </div>
          </div>

          <div className="appshowcase-container__bottom-info flex flex-wrap gap-5">
            <div className="flex justify-center flex-col items-start">
              <h1 className="font-bold text-3xl mb-4">
                Create your <span className="color">network</span>
              </h1>
              <p className="mb-4 max-w-[43rem]">
                networks makes it easy for you to create your own network so
                that people can buy from your business the idea is to make your
                network grow stronger
              </p>
              <Link className="aa font-[500] border border-[#8ABB3A] p-[0.7rem] text-md hover:text-gray-600">
                Learn more
              </Link>
            </div>
            <img
              src={networkImage}
              alt="image for sell everywhere"
              className="w-[18rem]"
            />
          </div>

          <div className="appshowcase-container__bottom-info flex flex-wrap gap-5">
            <div className="flex justify-center flex-col items-start">
              <h1 className="font-bold text-3xl mb-4">
                Share on other <span className="color">socials</span>
              </h1>
              <p className="mb-4 max-w-[43rem]">
                networks makes it easy for you to share your business on other
                social media platform so that your network is not only limited
                to network but you have an advantage to share it with other
                people on social media
              </p>
              <Link className="aa font-[500] border border-[#8ABB3A] p-[0.7rem] text-md hover:text-gray-600">
                Learn more
              </Link>
            </div>
            <img
              src={socialsImage}
              alt="image for sell everywhere"
              className="w-[18rem]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

// 14 may
