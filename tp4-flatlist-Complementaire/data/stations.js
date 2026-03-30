// export const stations = [
//         {
//             "idstation":"5505",
//             "nom":"Sainte-Anne",
//             "nombreemplacementsdisponibles":5,
//             "nombrevelosdisponibles":19
//         }
//         ,
//         {
//             "idstation":"5509",
//             "nom":"Saint-Georges Piscine",
//             "nombreemplacementsdisponibles":5,
//             "nombrevelosdisponibles":12
//         }
//         ,
//         {
//             "idstation":"5510",
//             "nom":"Musée Beaux-Arts",
//             "nombreemplacementsdisponibles":8,
//             "nombrevelosdisponibles":8
//         }
//         ,
//         {
//             "idstation":"5514",
//             "nom":"Bonnets Rouges",
//             "nombreemplacementsdisponibles":13,
//             "nombrevelosdisponibles":10,
//         }
//         ,
//         {
//             "idstation":"5517",
//             "nom":"Charles de Gaulle",
//             "nombreemplacementsdisponibles":10,
//             "nombrevelosdisponibles":14
//         }
//         ,
//         {
//             "idstation":"5519",
//             "nom":"Colombier",
//             "nombreemplacementsdisponibles":13,
//             "nombrevelosdisponibles":11,
//         }
//         ,
//         {
//             "idstation":"5520",
//             "nom":"Pont de Nantes",
//             "nombreemplacementsdisponibles":16,
//             "nombrevelosdisponibles":4
//         }
//         ,
//         {
//             "idstation":"5522",
//             "nom":"Oberthur",
//             "nombreemplacementsdisponibles":20,
//             "nombrevelosdisponibles":10,
//         }
//         ,
//         {
//             "idstation":"5537",
//             "nom":"Auberge de Jeunesse",
//             "nombreemplacementsdisponibles":21,
//             "nombrevelosdisponibles":8
//         }
//     ];

export async function getStations() {
    const url = "https://data.explore.star.fr/api/explore/v2.1/catalog/datasets/vls-stations-etat-tr/records?order_by=idstation&limit=60";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const body = await response.json();
      return body.results;
    } catch (error) {
      console.error(error.message);
    }
  }