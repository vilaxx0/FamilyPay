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
export default function StatusPathOdd({ navigation, title, balance, points }) {
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
          d="M129.84932 -0.35461L129.84932 70.35461"
        />
        <Ellipse
          ry={4.59444}
          rx={4.86471}
          cy={82.04607}
          cx={130.38123}
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
          d="M129.91865 95.08521L129.91865 165.10956"
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
          cy={24.97826}
          cx={82.7684}
          strokeWidth={15}
          fill="#27ae61"
        />
        <Ellipse
          stroke="#27ae61"
          ry={10}
          rx={10}
          cy={25.06945}
          cx={290.59578}
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
          cy={160.12704}
          cx={39.64692}
          strokeWidth={15}
          fill="#27ae61"
        />
        <Ellipse
          stroke="#27ae61"
          ry={6}
          rx={6}
          cy={72.95625}
          cx={358.44647}
          strokeWidth={15}
          fill="#27ae61"
        />
        <Ellipse
          stroke="#27ae61"
          ry={10}
          rx={10}
          cy={134.8652}
          cx={79.00682}
          strokeWidth={15}
          fill="#27ae61"
        />
        <Ellipse
          stroke="#27ae61"
          ry={6}
          rx={6}
          cy={113.35011}
          cx={252.33987}
          strokeWidth={15}
          fill="#27ae61"
        />
        <Ellipse
          stroke="#27ae61"
          ry={4}
          rx={4}
          cy={88.69665}
          cx={39.50053}
          strokeWidth={15}
          fill="#27ae61"
        />
        <Ellipse
          stroke="#27ae61"
          ry={4}
          rx={4}
          cy={111.05197}
          cx={352.96497}
          strokeWidth={15}
          fill="#27ae61"
        />
        <Ellipse
          stroke="#27ae61"
          ry={6}
          rx={6}
          cy={90.78744}
          cx={69.88859}
          strokeWidth={15}
          fill="#27ae61"
        />
        <Ellipse
          stroke="#27ae61"
          ry={10}
          rx={10}
          cy={60.20283}
          cx={226.32201}
          strokeWidth={15}
          fill="#27ae61"
        />
      </Svg>
      <View style={styles.container}>
        <VirtualPet
          animationPath={require("../assets/VirtualPet/flying_bee.json")}
          size={60}
        />
        <View style={styles.containerCard}>
          <View style={styles.topPart}>
            <Text style={styles.weekText}>{title}</Text>
          </View>
          <View style={styles.bottomPart}>
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
          </View>
        </View>
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

    right: "5%",
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
