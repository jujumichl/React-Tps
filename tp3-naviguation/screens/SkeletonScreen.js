import { View, Text, StyleSheet } from 'react-native';

export default function SkeletonScreen({route}) {

    const {message} = route.params
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{message}</Text>
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
