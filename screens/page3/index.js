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
import ragnarok from "../../assets/img/ragnarok.png";

const Ragnarok = ({ navigation }) => {
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
              Ragnarök
            </Text>
            <Text style={styles.Texto}>
              O Ragnarök é um evento apocalíptico na mitologia nórdica, marcado
              por uma grande batalha entre deuses e forças destrutivas. É
              precedido por sinais como um inverno sem fim e violência
              crescente. Principais jogadores incluem Thor, Odin e Loki,
              enfrentando inimigos como Fenrir e Jormungand. A batalha é
              catastrófica, resultando na morte de muitos deuses e na destruição
              de Asgard e outros reinos. No entanto, o Ragnarök também simboliza
              um ciclo de renovação, com um novo mundo emergindo das cinzas após
              a devastação.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={styles.ImagemIlustrativaView}>
        <Image source={ragnarok} style={styles.ImagemIlustrativa} />
      </View>
    </View>
  );
};

export default Ragnarok;
