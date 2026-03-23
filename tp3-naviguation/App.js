import { NavigationContainer } from '@react-navigation/native';
import MyStackNavigator from './navigation/MyStackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <MyStackNavigator />
    </NavigationContainer>
  );
}
