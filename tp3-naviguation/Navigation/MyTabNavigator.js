import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import FeedScreen from '../screens/FeedScreen';
// import ProfileScreen from '../screens/ProfileScreen';
// import SettingsScreen from '../screens/SettingsScreen';
import SkeletonScreen from "../screens/SkeletonScreen";

const Tab = createBottomTabNavigator();

export default function MyTabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={SkeletonScreen}
                options={{ title: 'Accueil'}} initialParams={{message: "Feed Screens"}}/>
            <Tab.Screen name="Profile" component={SkeletonScreen}
                options={{ title: 'Profil' }} initialParams={{message: "Profile Screens"}}/>
            <Tab.Screen name="Settings" component={SkeletonScreen}
                options={{ title: 'Paramètres' }} initialParams={{message: "Settings Screens"}}/>
        </Tab.Navigator>
    );
}
