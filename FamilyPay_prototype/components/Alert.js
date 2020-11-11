import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";

const screen = Dimensions.get("window");

export const Alert = ({ correct, visible }) => {
  if (!visible) return null;

  const icon = correct
    ? require("../assets/check.png")
    : require("../assets/close.png");
  const circleStyles = [styles.circle];

  if (correct) {
    circleStyles.push(styles.circleCorrect);
  }
  return (
    <View style={styles.container}>
      <View style={circleStyles}>
        <View style={styles.circleInner}>
          <Image source={icon} style={styles.icon} resizeMode="contain" />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    backgroundColor: "#d93636",
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 2,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: "lightgrey",
    elevation: 16,
    shadowOffset: { width: 0, height: 8 },
    shadowColor: "#000",
    shadowOpacity: 0.44, // from 0 to 1
    shadowRadius: 10.32,
    padding: 20,
  },
  circleInner: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3E55D",
    width: screen.width / 2.2,
    height: screen.width / 2.2,
    borderRadius: screen.width / 2,
    borderWidth: 3,
    borderColor: "lightgrey",
  },
  circleCorrect: {
    backgroundColor: "#57d936",
  },
  icon: {
    width: screen.width / 3,
  },
});
