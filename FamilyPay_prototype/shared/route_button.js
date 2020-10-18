import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { globalStyles } from "../shared/globalStyles";

export default function RouteButton({ textName, iconName }) {
  return (
    <View style={{ alignItems: "center", marginHorizontal: 20 }}>
      <View style={globalStyles.button}>
        <View style={globalStyles.inner}>
          <MaterialIcons name={iconName} size={44} color="white" />
        </View>
      </View>
      <View>
        <Text style={styles.text}>{textName}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 18,
    textAlign: "center",
    paddingTop: 8,
  },
});
