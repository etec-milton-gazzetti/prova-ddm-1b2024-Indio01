import React from "react";
import { useCallback } from "react";
import styles from "./styles";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Deuses from '../../assets/img/deusesNordicos.png';

const Religiao = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.content}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 30,
                fontStyle: "italic",
                textAlign: "center",
              }}
            >
              Deuses e Deusas Nordicos
            </Text>
            <Text style={styles.Texto}>
              Na mitologia nórdica, Odin é o deus da sabedoria e da guerra, Thor
              é o deus do trovão e da força, Freyja é a deusa da fertilidade e
              do amor, e Loki é o deus da travessura e da astúcia. Frigg é a
              protetora do lar e da família. Cada um desses deuses e deusas
              principais tem características distintas e desempenha papéis
              importantes no panteão nórdico.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
          <View style={styles.ImagemIlustrativaView}>
            <Image source={Deuses} style={styles.ImagemIlustrativa}/>
          </View>  

      <View style={styles.buttonTitle}>
        <Text style={styles.buttonText}>RELIGIÃO</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonBurguer}
        onPress={() => navigation.toggleDrawer()}
      >
        <Text style={styles.buttonText}>
          <Ionicons name="menu" size={24} color="#fff" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Religiao;
