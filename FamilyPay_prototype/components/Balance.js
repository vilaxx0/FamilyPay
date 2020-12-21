import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../shared/globalStyles";

export default function Balance({ balance, points, title }) {
  return (
    <View style={(globalStyles.simpleContainer, { marginVertical: 15 })}>
      <Text style={globalStyles.balanceTitle}>{title}</Text>
      <View style={globalStyles.balanceColumn}>
        <View style={globalStyles.balanceNumberColumn}>
          <Text style={globalStyles.balanceNumberText}>{balance}€</Text>
          <Text style={globalStyles.balanceText}>OP DE BANK</Text>
        </View>
        <View
          style={{
            height: "100%",
            width: 1,
            backgroundColor: "lightgrey",
          }}
        />
        <View style={globalStyles.balanceNumberColumn}>
          <Text style={globalStyles.balanceNumberText}>{points}</Text>
          <Text style={globalStyles.balanceText}>PUNTEN</Text>
        </View>
      </View>
    </View>
  );
}
