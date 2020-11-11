import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";
import { globalStyles } from "../shared/globalStyles";

export default function RouteButton({ iconName, iconSize, text }) {
  return (
    <View style={(globalStyles.simpleContainer, { marginBottom: 20 })}>
      <View style={styles.categoriseerButton}>
        <View style={styles.innerCategoriseerButton}>
          <FontAwesome5 name={iconName} size={iconSize} color="white" />
        </View>
      </View>
      <Text style={styles.categoriseerButtonText}>{text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  categoriseerButton: {
    flex: 1,
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
    marginHorizontal: Dimensions.get("window").width * 0.06,
  },
  innerCategoriseerButton: {
    width: 100,
    height: 100,
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
});
