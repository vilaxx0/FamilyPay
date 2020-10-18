import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import RouteButton from "../shared/route_button";
import VirtualPet from "../components/VirtualPet";
import Balance from "../components/Balance";

export default function Home({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/Green_ray_burst.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Balance />
        </View>
        <View style={styles.body}>
          <VirtualPet />
        </View>

        <View style={styles.footer}>
          <View style={styles.buttons}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Transacties")}
            >
              <RouteButton
                textName="TRANSACTIES"
                iconName="account-balance-wallet"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Goals")}>
              <RouteButton textName="Goals" iconName="track-changes" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Verdien")}>
              <RouteButton textName="Verdien" iconName="casino" />
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
  },
  header: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 40,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  body: {
    flex: 2,
    backgroundColor: "white",
    width: "80%",
    marginVertical: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 25,
  },
});
