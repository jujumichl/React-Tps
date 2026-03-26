import { View, Text, FlatList, StyleSheet } from 'react-native';
import { stations } from './data/stations';
import ItemStation from './components/ItemStation';

export default function App() {
  function Separateur () {
    return (
      <View style={{ height: 1, backgroundColor: '#ddd', marginVertical: 2 }}    	/>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Stations de vélos</Text>
 
      <FlatList
        data={stations}                         // on passe le tableau d'objets importés depuis stations.js
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
});
