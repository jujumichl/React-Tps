import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const MyStack = createNativeStackNavigator();

export default function MyStackNavigator() {
  return (
    <MyStack.Navigator initialRouteName='Home' screenOptions={{
      headerStyle: { backgroundColor: 'darkorange' },
      headerTintColor: 'white'
    }}>

      <MyStack.Screen name="Details" component={DetailsScreen}/>
      <MyStack.Screen
        name="Home"
        component={HomeScreen}
      />
    </MyStack.Navigator>
  );
}
