import React from 'react';
import { useCallback } from 'react';
import styles from './styles';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Logo from '../../assets/img/arvore.png'


const Home = ({navigation}) => {
  return (
      <View style={styles.container}>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.content}>
              <Image source={Logo} style={styles.Image}/>
              <Text style={{fontWeight: 'bold', fontSize:30, fontStyle:'italic'}}>Mitologia Nordica</Text>
            </View>
          </ScrollView>
        </SafeAreaView>

        <View style={styles.buttonTitle}>
          <Text style={styles.buttonText}>INICIO</Text>
        </View>
        <TouchableOpacity style={styles.buttonBurguer} onPress={()=>navigation.toggleDrawer()}>
          <Text style={styles.buttonText}><Ionicons name="menu" size={24} color="#fff" /></Text>
        </TouchableOpacity>
      </View>
  );
};

export default Home;