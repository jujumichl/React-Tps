import { View, Text, FlatList, StyleSheet, TextInput } from 'react-native';
import { getStations } from './data/stations';
import ItemStation from './components/ItemStation';
import { useState, useEffect } from 'react';

export default function App() {
  const [searchingText, setSearchingText] = useState('');
  const [stations, setStations] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        let results = await getStations();
        console.log(results);
        setStations(results);
      }
      catch (error) {
        console.log(`Erreur lors de la récupération des stations : ${error}`);
      }
    }
    fetchData();
  }, []);
  const displayedStations = stations.sort(compareTo).filter(s => s.nom.toLowerCase().includes(searchingText.toLowerCase()));

  function compareTo(s1, s2) {
    return s2.nombrevelosdisponibles - s1.nombrevelosdisponibles;
  }

  function Separateur() {
    return (
      <View style={{ height: 1, backgroundColor: '#ddd', marginVertical: 2 }} />
    );
  }



  return (
    <View style={styles.container}>
      {/* <Text style={styles.titre}>Stations de vélos</Text> */}
      <Text style={styles.titre}>Station de vélos : {stations.length}</Text>
      <TextInput onChangeText={setSearchingText} value={searchingText} style={styles.search} placeholder='Rechercher une station...' />

      <FlatList
        data={displayedStations}                         // on passe le tableau d'objets importés depuis stations.js
        keyExtractor={(item) =>                 // React a besoin d'une clé unique par élément pour optimiser les re-rendus. On utilise idstation converti en string.
          item.idstation.toString()}
        ItemSeparatorComponent={Separateur}
        renderItem={({ item }) => (             // Reçoit un objet avec la propriété item. On déstructure avec ({ item }) pour accéder directement à l'objet station.
          <ItemStation station={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  titre: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1A3A5C',
  },
  item: {
    fontSize: 16,
    paddingVertical: 10,
    color: '#333',
  },
  search: {
    height: 30,
    display: 'flex',
    padding: '15px',
    backgroundColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    borderRadius: 3,
  },
});
