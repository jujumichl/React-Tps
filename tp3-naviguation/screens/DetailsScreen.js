import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function DetailsScreen() { 
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ecran de détails</Text>
      <Button  title="retour a l'accueil"
               onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
