import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [nom, setNom] = useState('');
  const [mess, setMess] = useState('');
  let color;
  let msgBienvenue = nom.trim() === '' ? `Hello moi ` : `Hello ${nom.trim()} `;
  let msgPerso = mess.trim() === '' ? `` : `${mess.trim()} `;
  let maxChar = mess.length;
  color = maxChar > 3 ? '#00FF00' : maxChar === 0 ? '#3b5bdb' : '#FF0000';

  return (
    <View style={styles.container}>
      <Text style={[styles.titreDefault, {color: `${color}`}]}>
        {msgBienvenue}{msgPerso}!
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Saisis ton prénom..."
        onChangeText={(valeur) => setNom(valeur)}
        value={nom}
      />
      <TextInput
        style={styles.input}
        placeholder="Saisis ton message..."
        onChangeText={(valeur) => setMess(valeur)}
        value={mess} 
        maxLength={20}
      />
      <Text style={styles.maxChar}>
        {maxChar}/20
      </Text>
      <Button
        onPress={() => { setNom(""), setMess("")}}
        title="Erase"
        color="#841584"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  titreDefault: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#3b5bdb',
    marginBottom: 32,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#3b5bdb',
    borderRadius: 12,
    padding: 12,
    fontSize: 18,
    backgroundColor: '#ffffff',
    color: '#333',
  },
});
