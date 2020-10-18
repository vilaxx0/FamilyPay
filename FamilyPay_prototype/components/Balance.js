import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Balance({ inAccount }) {
  return (
    <View style={styles.topContainer}>
      <Text style={{ fontWeight: "bold", fontSize: 30, padding: 10 }}>
        Marin, je hebt
      </Text>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.amountView}>
          <Text style={{ fontSize: 40, fontWeight: "bold", color: "#D4AC0D" }}>
            {inAccount}€
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>IN JE</Text>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>ACCOUNT</Text>
        </View>
        <View style={{ borderRightWidth: 1 }}></View>
        <View style={styles.amountView}>
          <Text style={{ fontSize: 40, fontWeight: "bold", color: "#D4AC0D" }}>
            300€
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>VASTE LASTEN</Text>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>TE BETALEN</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  amountView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
  },
});
