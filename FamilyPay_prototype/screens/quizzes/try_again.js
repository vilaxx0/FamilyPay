import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { NavigationActions, StackActions } from "react-navigation";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import VirtualPet from "../../components/VirtualPet";
import categoriseerQuestions from "../../data/categoriseer_transacties";
import betaalQuestions from "../../data/betaal_minder";

export default function TryAgain({ route, navigation }) {
  const { userName, titleText, screenName } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.petContainer}>
          <VirtualPet
            animationPath={require("../../assets/VirtualPet/scared_bee.json")}
            size={350}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>
            Helaas {userName}. {titleText}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.replace(screenName, {
                questions:
                  screenName == "Betaal"
                    ? betaalQuestions
                    : categoriseerQuestions,
              });
            }}
          >
            <View style={styles.button}>
              <View style={styles.innerButton}>
                <FontAwesome name={"repeat"} size={40} color="white" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <View style={styles.button}>
              <View style={styles.innerButton}>
                <FontAwesome5 name={"home"} size={40} color="white" />
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
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

    fontFamily: "righteous-regular",
  },
});
