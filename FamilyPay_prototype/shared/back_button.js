import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { globalStyles } from "../shared/globalStyles";

export default function Back_Button({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <View style={styles.backButton}>
        <View style={styles.backInner}>
          <AntDesign name="back" size={28} color="white" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: "#F3E55D",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#D4AC0D",
    padding: 5,
    marginLeft: 15,
    elevation: 16,
    shadowOffset: { width: 0, height: 8 },
    shadowColor: "#000",
    shadowOpacity: 0.44, // from 0 to 1
    shadowRadius: 10.32,
  },
  backInner: {
    backgroundColor: "#F3E55D",
    borderWidth: 2,
    borderRadius: 15,
    padding: 5,
    borderColor: "#D4AC0D",
  },
});
