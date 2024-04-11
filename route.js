import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';
import DashboardScreen from './screens/DashboardScreen';
import SettingsScreen from './screens/SettingsScreen';
import Home from './screens/page1/index';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';


//video de auxilio 1 https://www.youtube.com/watch?v=SwrqwlpwD5Q
//video de auxilio 2 https://www.youtube.com/watch?v=bnRIvh6NVqA

const Drawer = createDrawerNavigator();
export default function Routes() {
    
    const CustomDrawerContent = (props) => {
        return (
          <DrawerContentScrollView {...props}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Meu Aplicativo</Text>
            </View>
            <DrawerItemList {...props} />
          </DrawerContentScrollView>
        );
      };

return (  
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen 
        name='Home'
        component={Home}
        options={{
            headerShown:true,
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
            headerShown:true,
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
            headerShown:true,
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightblue',
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
