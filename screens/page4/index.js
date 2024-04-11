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
import criatura from "../../assets/img/criatura.png";

const Criaturas = ({ navigation }) => {
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
              Bestas Mitologicas
            </Text>
            <Text style={styles.Texto}>
              Na mitologia nórdica, as criaturas incluem dragões como Nidhogg e
              Fafnir, gigantes como Utgard-Loki e Surtr, elfos da luz e da
              escuridão, anões como Brokk e Eitri, além de Fenrir (o lobo
              gigante) e Jormungand (a serpente cósmica). Cada uma dessas
              criaturas desempenha um papel significativo nas histórias e nas
              batalhas mitológicas.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={styles.ImagemIlustrativaView}>
        <Image source={criatura} style={styles.ImagemIlustrativa} />
      </View>

      <View style={styles.buttonTitle}>
        <Text style={styles.buttonText}>CRIATURAS</Text>
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

export default Criaturas;
