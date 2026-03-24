import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() { 
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur l'Accueil !</Text>
      <Button  title="Aller aux Détails"
               onPress={() => navigation.navigate('Details', {itemId: 50, message: 'Hello world !'})}
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
