import papa from "papaparse";
import mediaData from "../data/mg_cities.json";
import legendItems from "../entities/LegendeItems";

class LoadCitiesTasks {
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
      city.properties.confirmedText = "";
        
      if (matchCity != null) {

        let confirmed = Number(matchCity.cat);
        let mine = matchCity.nome;
        let state = matchCity.uf;
        // console.log(mine);
        city.properties.confirmed = confirmed;
        city.properties.confirmedText = ` - ${state} (${mine})`;
      }

      this.#setCityColor(city);
    }
    this.setState(features);
  };

  #setCityColor = (city) => {
    const legendItem = legendItems.find((item) =>
      item.isFor(city.properties.confirmed)
    );

    if (legendItem != null) {
      city.properties.color = legendItem.color;
    }
  };
}
export default LoadCitiesTasks;
