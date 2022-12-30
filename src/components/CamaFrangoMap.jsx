import React from "react";
// import {Map, } from 'react-leaflet';
import { MapContainer as MapContainerLeaflet, GeoJSON } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "./camafrangomap.css";

const CamaFrangoMap = ({ cities }) => {
  const mapStyle = {
    fillColor: "white",
    weight: 0.3,
    color: "grey",
    fillOpacity: 1,
  };

  const OnEachCity = (city, layer) => {
    layer.options.fillColor = city.properties.color;
    const name = city.properties.name;
    const confirmedText = city.properties.confirmedText;
    // layer.bindPopup(`${name} ${confirmedText} - ${city.geometry.coordinates[0][56]}`);
    layer.bindPopup(`${name} ${confirmedText}`);
    // layer.bindPopup(`${name} - Cama de Frango`);
  };

  return (
    <MapContainerLeaflet
      style={{ height: "90vh" }}
      zoom={4}
      center={[-15.7801, -47.9292]} //Brasília
    >
      <GeoJSON style={mapStyle} data={cities} onEachFeature={OnEachCity} />
    </MapContainerLeaflet>
  );
};

export default CamaFrangoMap;
