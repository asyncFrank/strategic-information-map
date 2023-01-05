import React, { useEffect } from "react";
import { useMap } from "react-leaflet";

import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

import L from "leaflet";


const LeafletRoutingMachine = () => {
//   const LeafletGeocoder = () => {
    const map = useMap();

    useEffect(() => {
      L.Routing.control({
        waypoints: [
            L.latLng(-15.744837375536111, -54.99819165562205),
            L.latLng(-15.33812001269144, -58.87323955063028)
        ],
        language:'pt-BR'
      }).addTo(map);
    },[]);
  };

  // return (
  // null;
  //   )
// };

export default LeafletRoutingMachine;
