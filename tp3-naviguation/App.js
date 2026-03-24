import { NavigationContainer } from '@react-navigation/native';
//import MyStackNavigator from './navigation/MyStackNavigator';
import MyTabNavigator from './navigation/MyTabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <MyTabNavigator />
    </NavigationContainer>
  );
}
