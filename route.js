import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from './screens/DashboardScreen';
import SettingsScreen from './screens/SettingsScreen';
import Home from './screens/page1/index';


//video de auxilio 1 https://www.youtube.com/watch?v=SwrqwlpwD5Q
//video de auxilio 2 https://www.youtube.com/watch?v=bnRIvh6NVqA

const Drawer = createDrawerNavigator();

export default function Routes() {

return (  
    <Drawer.Navigator>
        <Drawer.Screen 
        name='Home'
        component={Home}
        options={{
            headerShown:false,
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#fff',
            drawerContentStyle:{
                backgroundColor: '#234260',
            },
            headerStyle:{
                backgroundColor: '#234260',
            }
        }}/>
        <Drawer.Screen 
        name='Dashboard'
        component={DashboardScreen}
        options={{
            headerShown:false,
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#fff',
            drawerContentStyle:{
                backgroundColor: '#234260',
            },
            headerStyle:{
                backgroundColor: '#234260',
            }
        }}/>
        <Drawer.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
            headerShown:false,
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#fff',
            drawerContentStyle:{
                backgroundColor: '#234260',
            },
            headerStyle:{
                backgroundColor: '#234260',
            }
        }}/>
    </Drawer.Navigator>
  )
}