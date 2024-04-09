import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import DashboardScreen from './screens/DashboardScreen';
import SettingsScreen from './screens/SettingsScreen';

//video de auxilio https://www.youtube.com/watch?v=bnRIvh6NVqA

const Drawer = createDrawerNavigator();
export default function Routes() {
    
return (  
    <Drawer.Navigator>
        <Drawer.Screen 
        name='Dashboard'
        component={DashboardScreen}
        options={{
            headerShown:true,
        }}/>
        <Drawer.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
            headerShown:true,
        }}
        />
    </Drawer.Navigator>
  )
}

