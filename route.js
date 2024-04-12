import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './screens/page1/index';
import Religiao from './screens/page2/index';
import Apocalipse from './screens/page3/index';
import Criaturas from './screens/page4/index';
import Sobre from './screens/page5/index'
import { Colors } from 'react-native/Libraries/NewAppScreen';

//video de auxilio 1 https://www.youtube.com/watch?v=SwrqwlpwD5Q
//video de auxilio 2 https://www.youtube.com/watch?v=bnRIvh6NVqA

const Drawer = createDrawerNavigator();

export default function Routes() {

return (  
    <Drawer.Navigator>
        <Drawer.Screen 
        name='Inicio'
        component={Home}
        options={{
            headerShown:true,
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#fff',
            headerTintColor: '#fff',
            drawerContentStyle:{
                backgroundColor: '#234260',
            },
            headerStyle:{
                backgroundColor: '#234260',
            }
        }}/>
        <Drawer.Screen 
        name='Religiao'
        component={Religiao}
        options={{
            headerShown:true,
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#fff',
            headerTintColor: '#fff',
            drawerContentStyle:{
                backgroundColor: '#234260',
            },
            headerStyle:{
                backgroundColor: '#234260',
            }
        }}/>
        <Drawer.Screen 
        name='Apocalipse'
        component={Apocalipse}
        options={{
            headerShown:true,
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#fff',
            headerTintColor: '#fff',
            drawerContentStyle:{
                backgroundColor: '#234260',
            },
            headerStyle:{
                backgroundColor: '#234260',
            }
        }}/>
        <Drawer.Screen 
        name='Criaturas'
        component={Criaturas}
        options={{
            headerShown:true,
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#fff',
            headerTintColor: '#fff',
            drawerContentStyle:{
                backgroundColor: '#234260',
            },
            headerStyle:{
                backgroundColor: '#234260',
            }
        }}/>
        <Drawer.Screen 
        name='Sobre'
        component={Sobre}
        options={{
            headerShown:true,
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#fff',
            headerTintColor: '#fff',
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