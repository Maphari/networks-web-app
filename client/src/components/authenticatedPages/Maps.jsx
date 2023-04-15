import React, { useState, useEffect } from "react";
import { LeftNavigation } from "./LeftNavigation";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // import leaflet css stylesheet
import Loader from "../Loader";
import Info from "./Info";

export default function Maps() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  const isOpening = () => {
    setIsOpen(true);
  };



  if (latitude && longitude) {
    return (
      <>
        <section className="flex w-screen h-screen">
          {isOpening ? <Info /> : <LeftNavigation />}
          <section id="map" className="maps-container ">
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
              >
                {isOpen && <Popup>showing info</Popup>}
              </Marker>
            </MapContainer>
          </section>
        </section>
      </>
    );
  } else {
    return <Loader />;
  }
}
