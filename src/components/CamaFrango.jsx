import React, { useState, useEffect } from "react";
import CamaFrangoMap from "./CamaFrangoMap";
import Loading from "./Loading";
import Legend from "./Legend";
import LoadCitiesTasks from "../tasks/LoadCitiesTasks";
import legendItems from "../entities/LegendItems";

const CamaFrango = () => {
  const [cities, setCities] = useState([]);
  const legendItemsInReverse = [...legendItems].reverse();

  const load = () => {
    const loadCitiesTasks = new LoadCitiesTasks();
    loadCitiesTasks.load((cities) => setCities(cities));
  };

  useEffect(load, []);

  return (
    <div>
      {cities.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <CamaFrangoMap cities={cities} />
          <Legend legendItems={legendItemsInReverse} />
        </div>
      )}
    </div>
  );
};

export default CamaFrango;
