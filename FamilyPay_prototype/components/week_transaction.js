import React from "react";
import {
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function WeekTransaction({ route }) {
  //const { weekNumber, cash, points } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.topPart}>
        <Text style={styles.weekText}>1 WEEK GELEDEN</Text>
      </View>
      <View style={styles.bottomPart}>
        <TouchableOpacity onPress={() => alert("bimbam")}>
          <View style={styles.button}>
            <View style={styles.innerButton}>
              <AntDesign name="check" size={25} color="white" />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.bottomRight}>
          <Text style={styles.numberText}>+150 eu</Text>
          <View
            style={{
              borderBottomColor: "lightgrey",
              borderBottomWidth: 1,
              paddingTop: 2,
            }}
          ></View>
          <Text style={styles.numberText}>+10 ptn</Text>
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
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 15,
    // width: Dimensions.get("window").width * 0.35,
    // height: Dimensions.get("window").height * 0.12,
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
  },
  numberText: {
    fontSize: 15,
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
