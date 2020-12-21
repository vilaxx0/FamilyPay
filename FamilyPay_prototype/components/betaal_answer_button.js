import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";
import { globalStyles } from "../shared/globalStyles";

export default function RouteButton({ iconName, iconSize, text }) {
  return (
    <View style={styles.simpleContainer}>
      <View style={styles.categoriseerButton}>
        <View style={styles.innerCategoriseerButton}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  simpleContainer: {
    flex: 1,
    width: Dimensions.get("window").width * 0.8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  categoriseerButton: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3E55D",
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#D4AC0D",
    elevation: 4,
    shadowOffset: { width: 0, height: 8 },
    shadowColor: "#000",
    shadowOpacity: 0.44, // from 0 to 1
    shadowRadius: 10.32,
    marginHorizontal: Dimensions.get("window").width * 0.06,
  },
  innerCategoriseerButton: {
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3E55D",
    borderWidth: 2,
    borderRadius: 15,
    margin: 6,
    borderColor: "#D4AC0D",
  },
  categoriseerButtonText: {
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 18,
    textAlign: "center",
    letterSpacing: 1,
    alignSelf: "center",
    paddingTop: 5,
  },
  text: {
    color: "white",
    fontSize: 50,
    fontFamily: "righteous-regular",
  },
});
