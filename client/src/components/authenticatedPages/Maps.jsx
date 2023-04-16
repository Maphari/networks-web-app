import React, { useState, useEffect } from "react";
import { LeftNavigation } from "./LeftNavigation";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // import leaflet css stylesheet
import Loader from "../Loader";
import Info from "./Info";
import { useNavigate } from "react-router-dom";

export default function Maps() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // get user location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);


  const isOpening = () => {
    setIsOpen(true);
  };
  const isClosing = () => {
    setIsOpen(false);
  };

  if (latitude && longitude) {
    return (
      <>
        <section className="flex w-screen h-screen">
          <LeftNavigation />
          <section id="map" className="maps-container relative">
            <MapContainer
              center={[latitude, longitude]}
              zoom={16}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={[latitude, longitude]}
                interactive={true}
                eventHandlers={{ click: isOpening }}
              ></Marker>
            </MapContainer>
          </section>
          <form className="bg-[#8abb3a] absolute z-[99999] top-6 right-10 rounded">
           <i className="fa-solid fa-search text-white px-2"></i>
            <input
              className="outline-none bg-[#8abb3a] placeholder:opacity-60 rounded px-2 py-[0.8rem] placeholder:text-white w-[20rem] drop-shadow-2xl"
              type="text"
              placeholder="Search for stores, category, etc."
            />
          </form>
          {isOpen && (
            <section className="absolute right-10 top-32 z-[9999999] bg-white drop-shadow-2xl w-[20rem] h-[30rem] rounded-xl transition-all duration-700 ease-in-out">
              <div className="flex items-center justify-between py-4 px-4">
                <h1 className="font-medium text-xl">More information</h1>
                <button
                  className="bg-[#8abb3a] p-2 py-1 rounded font-medium text-white"
                  onClick={isClosing}
                >
                  close
                </button>
              </div>
            </section>
          )}
        </section>
      </>
    );
  } else {
    return <Loader />;
  }
}
