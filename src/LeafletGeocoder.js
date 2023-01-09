import React, { useEffect } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";
const LeafletGeocoder = () => {
  const map = useMap();
  useEffect(() => {
    L.Control.geocoder({
      defaultMarkGeocode: false,
    })
      .on("popupopen", function (e) {
        var px = map.project(e.target._popup._latlng); // find the pixel location on the map where the popup anchor is
        px.y -= e.target._popup._container.clientHeight / 2; // find the height of the popup container, divide by 2, subtract from the Y axis of marker location
        map.panTo(map.unproject(px), { animate: true }); // pan to new center
      })
      .on("markgeocode", function (e) {
        var latlng = e.geocode.center;
        L.marker(latlng).addTo(map).bindPopup(e.geocode.name).openPopup();
        map.fitBounds(e.geocode.bbox);
      })
      .addTo(map);
  }, []);
  return null;
};

export default LeafletGeocoder;
