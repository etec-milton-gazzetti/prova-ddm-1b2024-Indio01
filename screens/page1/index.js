import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Home = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
      <View style={styles.buttonTitle}>
        <Text style={styles.buttonText}>Tittle</Text>
      </View>
      <TouchableOpacity style={styles.buttonBurguer} onPress={()=>navigation.toggleDrawer()}>
        <Text style={styles.buttonText}><Ionicons name="menu" size={24} color="#fff" /></Text>
      </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text>TEXTAO</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBurguer: {
    position: 'absolute',
    top: 30,
    left: 0,
    backgroundColor: '#234260',
    padding: 10,
    borderRadius: 5,
    textAlign:'center',
    alignItems:'center',
  },
  buttonTitle: {
    position: 'absolute',
    top: 30,
    left: 0,
    right: 0,
    backgroundColor: '#234260',
    padding: 10,
    borderRadius: 0,
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