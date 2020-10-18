import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TransactionButtton({ textName }) {
  return (
    <View style={styles.button}>
      <View style={styles.inner}>
        <Text style={styles.text}>{textName}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    //alignItems: "center",
    //justifyContent: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#D4AC0D",
    padding: 2,
    marginHorizontal: 5,
  },
  inner: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    borderColor: "#D4AC0D",
  },
  text: {
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 18,
    textAlign: "center",
    //paddingTop: 8,
  },
});
