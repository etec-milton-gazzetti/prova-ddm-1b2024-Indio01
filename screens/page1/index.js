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
      </View>
  );
};

export default Home;