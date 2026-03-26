import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import FeedScreen from '../screens/FeedScreen';
// import ProfileScreen from '../screens/ProfileScreen';
// import SettingsScreen from '../screens/SettingsScreen';
import SkeletonScreen from "../screens/SkeletonScreen";
import { Ionicons } from '@expo/vector-icons'; 
import MyStackNavigator from "./MyStackNavigator";

const Tab = createBottomTabNavigator();
// Correspondance onglet → nom d'icône
const ICONS = {
    Feed: 'home',
    Profile: 'person',
    Settings: 'settings',
};


export default function MyTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({   // ← fonction, pas objet
                headerShown: false,
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons
                        name={ICONS[route.name]}
                        size={size}
                        color={color}
                    />
                ),
            })}
        >
            <Tab.Screen name="Feed" component={MyStackNavigator}
                options={{ title: 'Accueil' }} initialParams={{ message: "Feed Screens" }} />
            <Tab.Screen name="Profile" component={SkeletonScreen}
                options={{ title: 'Profil' }} initialParams={{ message: "Profile Screens" }} />
            <Tab.Screen name="Settings" component={SkeletonScreen}
                options={{ title: 'Paramètres' }} initialParams={{ message: "Settings Screens" }} />
        </Tab.Navigator>
    );
}
