import React from 'react';
import { useCallback } from 'react';
import styles from './styles';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Foto from '../../assets/img/fotoSobre.png'


const Home = ({navigation}) => {
  return (
      <View style={styles.container}>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.content}>
              <Image source={Foto} style={styles.Image}/>
              <Text style={{fontWeight: 'bold', fontSize:25, fontStyle:'italic'}}>Daniel Lins de Oliveira</Text>
              <Text style={{fontSize: '20', fontWeight: 'bold'}}>Terceiro Info</Text>
              <Text style={{fontSize: '15'}}>RM 07685</Text>

            </View>
          </ScrollView>
        </SafeAreaView>

        <View style={styles.buttonTitle}>
          <Text style={styles.buttonText}>SOBRE</Text>
        </View>
        <TouchableOpacity style={styles.buttonBurguer} onPress={()=>navigation.toggleDrawer()}>
          <Text style={styles.buttonText}><Ionicons name="menu" size={24} color="#fff" /></Text>
        </TouchableOpacity>
      </View>
  );
};

export default Home;