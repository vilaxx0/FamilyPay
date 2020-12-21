import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import Svg, { Path, Ellipse } from "react-native-svg";

import { AntDesign } from "@expo/vector-icons";
import VirtualPet from "../components/VirtualPet";

export default function StatusPathEven({ navigation, title, balance, points }) {
  return (
    <View>
      <Svg width={400} height={179}>
        <Path fill="none" d="M-1 -1H401V180H-1z" />
        <Path
          strokeLinecap="null"
          strokeLinejoin="null"
          fillOpacity="null"
          strokeWidth={15}
          stroke="#bca788"
          fill="none"
          d="M265.13301 -0L265.13301 70"
        />
        <Ellipse
          ry={4.59444}
          rx={4.86471}
          cy={81.86877}
          cx={265.13301}
          fillOpacity="null"
          strokeWidth={10}
          stroke="#bca788"
          fill="none"
        />
        <Path
          strokeLinecap="null"
          strokeLinejoin="null"
          fillOpacity="null"
          strokeWidth={15}
          stroke="#bca788"
          fill="none"
          d="M265.13301 94.57107L265.13301 164.59542"
        />
        <Path
          strokeLinecap="null"
          strokeLinejoin="null"
          fillOpacity="null"
          strokeOpacity="null"
          strokeWidth={15}
          stroke="#bca788"
          fill="none"
          d="M272.70033 171.86582L122.43007 171.86582"
        />
        <Ellipse
          stroke="#27ae61"
          ry={10}
          rx={10}
          cy={26.37102}
          cx={102.26701}
          strokeWidth={15}
          fill="#27ae61"
        />
        <Ellipse
          stroke="#27ae61"
          ry={10}
          rx={10}
          cy={28.69062}
          cx={329.87155}
          strokeWidth={15}
          fill="#27ae61"
        />
        <Ellipse
          stroke="#27ae61"
          ry={10}
          rx={10}
          cy={157.69588}
          cx={336.62843}
          strokeWidth={15}
          fill="#27ae61"
        />
        <Ellipse
          stroke="#27ae61"
          ry={6}
          rx={6}
          cy={153.72036}
          cx={48.28202}
          strokeWidth={15}
          fill="#27ae61"
        />
        <Ellipse
          stroke="#27ae61"
          ry={6}
          rx={6}
          cy={86.88382}
          cx={364.29605}
          strokeWidth={15}
          fill="#27ae61"
        />
        <Ellipse
          stroke="#27ae61"
          ry={10}
          rx={10}
          cy={124.9717}
          cx={114.47353}
          strokeWidth={15}
          fill="#27ae61"
        />
        <Ellipse
          stroke="#27ae61"
          ry={6}
          rx={6}
          cy={46.77629}
          cx={154.01116}
          strokeWidth={15}
          fill="#27ae61"
        />
        <Ellipse
          stroke="#27ae61"
          ry={4}
          rx={4}
          cy={79.50445}
          cx={42.00749}
          strokeWidth={15}
          fill="#27ae61"
        />
        <Ellipse
          stroke="#27ae61"
          ry={4}
          rx={4}
          cy={121.63693}
          cx={367.44965}
          strokeWidth={15}
          fill="#27ae61"
        />
      </Svg>
      <View style={styles.container}>
        <View style={styles.containerCard}>
          <View style={styles.topPart}>
            <Text style={styles.weekText}>{title}</Text>
          </View>
          <View style={styles.bottomPart}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Transacties", {
                  balance: balance,
                  points: points,
                })
              }
            >
              <View style={styles.button}>
                <View style={styles.innerButton}>
                  <AntDesign name="check" size={25} color="white" />
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.bottomRight}>
              <Text style={styles.numberText}>+ {balance}€</Text>
              <View
                style={{
                  borderBottomColor: "lightgrey",
                  borderBottomWidth: 1,
                  paddingTop: 2,
                }}
              ></View>
              <Text style={styles.numberText}>+ {points} ptn</Text>
            </View>
          </View>
        </View>
        <VirtualPet
          animationPath={require("../assets/VirtualPet/head_from_left.json")}
          size={60}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    flexDirection: "row",
    //width: Dimensions.get("window").width * 0.6,
    top: "15%",
    //marginHorizontal: 10,
    left: "8%",
  },
  containerCard: {
    //flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width * 0.4,
    paddingVertical: 8,
    backgroundColor: "white",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "lightgrey",
    elevation: 16,
    shadowOffset: { width: 0, height: 8 },
    shadowColor: "#000",
    shadowOpacity: 0.44, // from 0 to 1
    shadowRadius: 10.32,
  },
  weekText: {
    fontSize: 14,
    color: "grey",
  },
  topPart: {
    flex: 0.4,
  },
  bottomPart: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  bottomRight: {
    flexDirection: "column",
    padding: 5,
  },
  numberText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#F3E55D",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#D4AC0D",
    padding: 5,
    margin: 5,
    elevation: 16,
    shadowOffset: { width: 0, height: 8 },
    shadowColor: "#000",
    shadowOpacity: 0.44, // from 0 to 1
    shadowRadius: 10.32,
  },
  innerButton: {
    backgroundColor: "#F3E55D",
    borderWidth: 2,
    borderRadius: 15,
    padding: 5,
    borderColor: "#D4AC0D",
  },
});
