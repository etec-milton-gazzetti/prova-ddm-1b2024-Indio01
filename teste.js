import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Conteúdo da tela inicial</Text>
    </View>
  );
};

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Meu Aplicativo</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Sair"
        onPress={() => {
          // Lógica para sair da aplicação
        }}
      />
    </DrawerContentScrollView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

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

export default App;