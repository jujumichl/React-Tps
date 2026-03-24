import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedScreen from '../screens/FeedScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function MyTabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={FeedScreen}
                options={{ title: 'Accueil' }} />
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{ title: 'Profil' }} />
            <Tab.Screen name="Settings" component={SettingsScreen}
                options={{ title: 'Paramètres' }} />
        </Tab.Navigator>
    );
}
