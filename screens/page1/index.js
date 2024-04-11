import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Home = ({navigation}) => {
  return (
      <View style={styles.container}>
        <View style={styles.buttonTitle}>
          <Text style={styles.buttonText}>Tittle</Text>
        </View>
        <TouchableOpacity style={styles.buttonBurguer} onPress={()=>navigation.toggleDrawer()}>
          <Text style={styles.buttonText}><Ionicons name="menu" size={24} color="#fff" /></Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  scrollView:{
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBurguer: {
    position: 'absolute',
    top: 30,
    left: 20,
    backgroundColor: '#234260',
    padding: 10,
    borderRadius: 5,
    textAlign:'center',
    alignItems:'center',
  },
  buttonTitle: {
    position: 'absolute',
    top: 30,
    left: 75,
    right: 20,
    backgroundColor: '#234260',
    padding: 10,
    borderRadius: 5,
    textAlign:'center',
    alignItems:'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '20',
  },
});

export default Home;