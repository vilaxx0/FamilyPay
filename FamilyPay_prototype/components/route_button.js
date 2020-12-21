import React from "react";
import { Text, View, StyleSheet } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";
import { globalStyles } from "../shared/globalStyles";

export default function RouteButton({ iconName, iconSize, textName }) {
  return (
    <View style={globalStyles.simpleContainer}>
      <View style={styles.routeButton}>
        <View style={styles.innerRouteButton}>
          <FontAwesome5 name={iconName} size={iconSize} color="white" />
        </View>
      </View>
      <Text style={styles.routeButtonText}>{textName}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  routeButton: {
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
  },
  innerRouteButton: {
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
  routeButtonText: {
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 20,
    textAlign: "center",
    letterSpacing: 1,
    alignSelf: "center",
    textShadowRadius: 10,
    textShadowColor: "white",
    margin: 8,
  },
});
