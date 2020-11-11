import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import categoriseerQuestions from "../data/categoriseer_transacties";

import { globalStyles } from "../shared/globalStyles";

export default function SpelenCard({ item }) {
  const color = item.colorCode;
  const navigation = useNavigation();
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <View style={styles.topPart}>
        <Text style={styles.titleText}>"{item.title}"</Text>
        <Text style={styles.pointText}>Quiz - {item.points}</Text>
      </View>
      <View style={styles.bottomPart}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(item.quiz_screen_name, {
              questions: categoriseerQuestions,
            })
          }
        >
          <View style={styles.button}>
            <View style={styles.innerButton}>
              <Text style={styles.buttonText}>START</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    height: Dimensions.get("window").height * 0.2,
    // elevation: 16,
    // shadowOffset: { width: 0, height: 8 },
    // shadowColor: "#000",
    // shadowOpacity: 0.44, // from 0 to 1
    // shadowRadius: 10.32,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "lightgrey",
  },
  topPart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomPart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: Dimensions.get("window").width * 0.06,
    color: "white",
    fontFamily: "righteous-regular",
    paddingTop: 25,
  },
  pointText: {
    fontSize: Dimensions.get("window").width * 0.055,
    fontFamily: "fugaz-regular",
    paddingTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#F3E55D",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#D4AC0D",
    padding: 5,
    elevation: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  innerButton: {
    backgroundColor: "#F3E55D",
    borderWidth: 2,
    borderRadius: 15,
    padding: 5,
    borderColor: "#D4AC0D",
    paddingHorizontal: 50,
  },
});
