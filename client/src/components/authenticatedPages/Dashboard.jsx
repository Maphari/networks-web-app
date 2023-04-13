import React, { useState } from "react";

export const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-container__top">
          <div className="dashboard-container__top-header relative">
            <span className="absolute h-10 w-10 bg-[#8abb3a] rounded-full"></span>
            <h1 className="relative z-50 ml-2">
              <span className="text-white">D</span>ashboard
            </h1>
          </div>

          <form>
            <div
              className={`border ${
                searchTerm ? "rounded-none" : "rounded"
              } py-[0.6rem] w-[20rem] flex items-center gap-1 relative`}
            >
              <i className="fa-solid fa-search ml-2"></i>
              <input
                type="text"
                placeholder="Search for categories, shops, etc."
                className="flex-1 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {searchTerm && (
              <div className="absolute drop-shadow-2xl bg-[#1E1E1E] text-white p-1 w-[20rem] flex flex-col flex-wrap">
                {searchTerm}
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};
