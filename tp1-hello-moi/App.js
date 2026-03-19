import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Hello moi !</Text>
      <Text style={styles.sousTitre}>BTS SIO Lycée VHB</Text>
      <View style={styles.images}>
        <Image style={styles.logoAndroid} source={require('./assets/logo-android.jpg')} />
        <Image style={styles.logoReact} source={require('./assets/tiny-logo.png')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2A28',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titre: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#DFDAD8',
  },
  sousTitre: {
    fontSize: 20,
    color: '#DFDAD8',
  },
  logoAndroid: {
    width: 75,
    height: 75,
    alignSelf: 'flex-start',
    marginEnd: 15,
  },
  logoReact: {
    width: 75,
    height: 75,
    alignSelf: 'flex-end',
  },
  images: {
    flexDirection: 'row',
  }
});
