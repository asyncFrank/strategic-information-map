import papa from "papaparse";
import mediaData from "../data/mg_cities.json";
import legendItems from "../entities/LegendItems";

class LoadCitiesTasks {
  citiesSiglas = [
    [11, "RO"],
    [12, "AC"],
    [13, "AM"],
    [14, "RR"],
    [15, "PA"],
    [16, "AP"],
    [17, "TO"],
    [21, "MA"],
    [22, "PI"],
    [23, "CE"],
    [24, "RN"],
    [25, "PB"],
    [26, "PE"],
    [27, "AL"],
    [28, "SE"],
    [29, "BA"],
    [31, "MG"],
    [32, "ES"],
    [33, "RJ"],
    [35, "SP"],
    [41, "PR"],
    [42, "SC"],
    [43, "RS"],
    [50, "MS"],
    [51, "MT"],
    [52, "GO"],
    [53, "DF"],
  ];
  cfDataUrl =
    "https://raw.githubusercontent.com/asyncFrank/cfBrasil2022/main/list-test-lst.csv";

  setState = null;
  //aqui em baixo vira todos os paieses ou cidades que foram desenhados no mapa (nosso caso, cidades)
  // mapCities = features;

  load = (setState) => {
    this.setState = setState;

    papa.parse(this.cfDataUrl, {
      download: true,
      header: true,
      complete: (result) => {
        console.log("antes", result.data);

        // this.#processCfData(result.data)
        this.#processCfData(result.data);
      },
    });
  };

  #processCfData = (dataCities) => {
    // console.log("tamanho de quem", cfCities.length);
    const { features } = mediaData;

    for (let i = 0; i < features.length; i++) {
      const city = features[i];

      const matchCity = dataCities.find(
        (dataCityItem) => city.properties.id === dataCityItem.id
      );
      // console.log(matchCity);

      //default values
      city.properties.confirmed = 0;
      const matchSigla = this.citiesSiglas.find(
        (item) => item[0] === Number(city.properties.id.substr(0, 2))
      );

      if (matchSigla != null) city.properties.confirmedText = matchSigla[1];

      if (matchCity != null) {
        let confirmed = Number(matchCity.cat);
        let mine = matchCity.nome;
        let state = matchCity.uf;
        // console.log(mine);
        city.properties.confirmed = confirmed;
        if (mine !== "") {
          city.properties.confirmedText = ` - ${state} (${mine})`;
        } else {
          city.properties.confirmedText = ` - ${state}`;
        }
      }

      this.#setCityColor(city);
    }
    this.setState(features);
    // this.#setCountCitiesCategory(dataCities);
  };

  #setCityColor = (city) => {
    const legendItem = legendItems.find((item) =>
      item.isFor(city.properties.confirmed)
    );

    if (legendItem != null) {
      city.properties.color = legendItem.color;
    }
  };
  // #setCountCitiesCategory = (citiesCategory) => {
  //   var totalCamaFrango = citiesCategory.filter(
  //     (item) => item.cat === 1
  //   ).length;
  //   // console.log(totalCamaFrango);
  // };
}
export default LoadCitiesTasks;
