import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import VirtualPet from "../components/VirtualPet";

import { EventRegister } from "react-native-event-listeners";

export default function Finish({ route }) {
  const { points, userName, titleText, eventName } = route.params;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.petContainer}>
          <VirtualPet
            animationPath={require("../assets/VirtualPet/happy_bee.json")}
            size={350}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.pointsText}>
            + {JSON.stringify(points)} punten
          </Text>
          <Text style={styles.text}>Mijlpaal voltooid! Goed gedaan! </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              EventRegister.emit(eventName, points);
              navigation.navigate("Home");
            }}
          >
            <View style={styles.button}>
              <View style={styles.innerButton}>
                <FontAwesome5 name={"check"} size={40} color="white" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    //justifyContent: "center",
    backgroundColor: "#56d756",
  },
  main: {
    flex: 1,
    alignItems: "center",
    //justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "white",
    margin: 15,
    padding: 20,
    width: "93%",
  },
  petContainer: {
    flex: 2,
    justifyContent: "flex-end",
  },
  titleContainer: {
    flex: 1.5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3E55D",
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#D4AC0D",
    elevation: 16,
    shadowOffset: { width: 0, height: 8 },
    shadowColor: "#000",
    shadowOpacity: 0.44, // from 0 to 1
    shadowRadius: 10.32,
  },
  innerButton: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3E55D",
    borderWidth: 2,
    borderRadius: 15,
    margin: 6,
    borderColor: "#D4AC0D",
  },
  pointsText: {
    fontSize: 50,
    color: "#F3E55D",
    fontFamily: "righteous-regular",
  },
  text: {
    textAlign: "center",
    fontSize: 40,
    paddingTop: 50,
    fontFamily: "righteous-regular",
  },
});
