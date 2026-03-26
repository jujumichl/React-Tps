import { View, Text, StyleSheet } from 'react-native';
 
export default function ItemStation({ station }) {
  return (
    <View style={styles.carte}>
      {/* En-tete de la carte */}
      <View style={styles.entete}>
        <Text style={styles.id}>#{station.idstation}</Text>
        <Text style={styles.nom}>{station.nom}</Text>
      </View>
 
      {/* Indicateurs */}
      <View style={styles.indicateurs}>
        <View style={styles.badge}>
          <Text style={styles.badgeNombre}>
            {station.nombrevelosdisponibles}
          </Text>
          <Text style={styles.badgeLabel}>vélos</Text>
        </View>
 
        <View style={[styles.badge, styles.badgeAttache]}>
          <Text style={styles.badgeNombre}>
            {station.nombreemplacementsdisponibles}
          </Text>
          <Text style={styles.badgeLabel}>attaches</Text>
        </View>
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  carte: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  entete: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  id: {
    fontSize: 12,
    color: '#888',
    marginRight: 8,
  },
  nom: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A3A5C',
    flex: 1,
  },
  indicateurs: {
    flexDirection: 'row',
    gap: 10,
  },
  badge: {
    backgroundColor: '#D6E8F7',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 14,
    alignItems: 'center',
  },
  badgeAttache: {
    backgroundColor: '#E8F5E9',
  },
  badgeNombre: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1A3A5C',
  },
  badgeLabel: {
    fontSize: 11,
    color: '#555',
  },
});
