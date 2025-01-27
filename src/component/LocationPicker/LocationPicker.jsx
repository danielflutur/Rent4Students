import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: 45.9432, // Center map on Romania
  lng: 24.9668,
};

function LocationPicker({ initialLocation, onLocationChange, center }) {
  const [selectedLocation, setSelectedLocation] = useState(initialLocation);

  const handleMapClick = (event) => {
    const location = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setSelectedLocation(location);
    onLocationChange(location);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCq7sBjntC5m7RFt5pHAzbLAfDtuQ8tXZw">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center || selectedLocation || defaultCenter}
        zoom={10}
        onClick={handleMapClick}
      >
        {selectedLocation && <Marker position={selectedLocation} />}
      </GoogleMap>
    </LoadScript>
  );
}

export default LocationPicker;
