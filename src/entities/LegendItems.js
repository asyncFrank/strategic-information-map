// aqui vai ser nossa lista de Legendas

import LegendItem from "./LegendItem";

const legendItems = [
  new LegendItem("Neutras", "#fff", (cases) => cases === 0),
  new LegendItem(
    "Fontes de Fósforo",
    "#E52E2E",
    (cases) => cases === 2,
    "white",
    (cases) => cases === 2
  ),
  new LegendItem(
    "Cama de Frango",
    "#E49F17",
    (cases) => cases === 1,
    "white",
    (cases) => cases === 1
  ),
  new LegendItem(
    "Misturadores",
    "#005aff",
    (cases) => cases === 3,
    "white",
    (cases) => cases === 3
  ),
  // new LegendItem("Não presentes", "#ffffff", (cases) => true),
  // new LegendItem(
  //   "Cidades onde encontra-se presente Cama de Frango",
  //   "#9c2929",
  //   (cases) => (cases !==0),
  //   "white"
  // )

  /**
   *
   *
   */
];

export default legendItems;

/*
    #741f1f //realy red
    #9c2929 // more red
    #c57f7f //red
    #d8aaaa //more pink
    #ebd4d4 //pink
    #ffffff //white
    ***************
#E49F17 - cama de frango
    #005aff - blue - misturadores
    #E52E2E - grená - rochas/fosfato
    #D16440 - xxxx - onde coincidem cama de frango e fosfato
*/
