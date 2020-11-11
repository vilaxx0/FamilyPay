import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { globalStyles } from "../shared/globalStyles";
import BackButton from "../shared/back_button";
import Balance from "../components/Balance";
import VirtualPet from "../components/VirtualPet";

export default function Status({ navigation, route }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackButton navigation={navigation} />,
    });
  }, [navigation]);
  const { balance, points } = route.params;
  return (
    <View style={styles.statusContainer}>
      <View style={styles.statusInnerContainer}>
        <ScrollView>
          <View style={styles.statusHeader}>
            <Balance
              balance={JSON.stringify(balance)}
              points={JSON.stringify(points)}
            />
            <View style={{ alignSelf: "center" }}>
              <VirtualPet
                animationPath={require("../assets/VirtualPet/sitting_bee.json")}
                size={180}
              />
            </View>
          </View>

          <View style={styles.statusMap}>
            <Image
              source={require("../assets/pathtest1.png")}
              style={{}}
              resizeMode="contain"
            />
            <Text style={{ fontSize: 40 }}>Map place</Text>
            <Text style={{ fontSize: 40 }}>Map place</Text>
            <Text style={{ fontSize: 40 }}>Map place</Text>
            <Text style={{ fontSize: 40 }}>Map place</Text>
            <Text style={{ fontSize: 40 }}>Map place</Text>
            <Text style={{ fontSize: 40 }}>Map place</Text>
            <Text style={{ fontSize: 40 }}>Map place</Text>
            <Text style={{ fontSize: 40 }}>Map place</Text>
            <Text style={{ fontSize: 40 }}>Map place</Text>
            <Text style={{ fontSize: 40 }}>Map place</Text>
            <Text style={{ fontSize: 40 }}>Map place</Text>
            <Text style={{ fontSize: 40 }}>Map place</Text>
            <Text style={{ fontSize: 40 }}>Map place</Text>
            <Text style={{ fontSize: 40 }}>Map place</Text>
          </View>
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  statusContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#56d756",
  },
  statusInnerContainer: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "white",
    margin: 15,
    padding: 15,
  },
  statusHeader: {
    flex: 1,
  },
  statusMap: {
    flex: 1,
  },
});
