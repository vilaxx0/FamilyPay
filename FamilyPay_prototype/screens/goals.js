import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { globalStyles } from "../shared/globalStyles";

export default function Goals({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={globalStyles.backButton}>
            <View style={globalStyles.backInner}>
              <AntDesign name="back" size={28} color="white" />
            </View>
          </View>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text>Goals screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
