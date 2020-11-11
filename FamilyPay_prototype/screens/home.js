import { StatusBar } from "expo-status-bar";
import React, { Component, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Text,
} from "react-native";

import { EventRegister } from "react-native-event-listeners";

import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import RouteButton from "../shared/route_button";
import VirtualPet from "../components/VirtualPet";
import Balance from "../components/Balance";
import * as Animatable from "react-native-animatable";

import renderIf from "render-if";

import { globalStyles } from "../shared/globalStyles";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: 1500,
      points: 300,
      toggleAnimationType: false,
      animationPath: require("../assets/VirtualPet/doing_okay_bee.json"),
    };
  }
  // const addBalance = (amount) => {
  //   setBalance((prevState) => {
  //     return prevState + amount;
  //   });
  // };
  // const takeBalance = (amount) => {
  //   setBalance((prevState) => {
  //     return prevState - amount;
  //   });
  // };

  componentWillMount() {
    this.listener = EventRegister.addEventListener("addPoints", (points) => {
      this.setState({
        points: this.state.points + points,
      });
    });
  }

  componentWillUnmount() {
    EventRegister.removeEventListener(this.listener);
  }
  render() {
    const toggleGift = () => {
      this.setState({
        toggleAnimationType: !this.state.toggleAnimationType,
      });
    };
    const resetAnimation = () => {
      this.setState({
        animationPath: require("../assets/VirtualPet/doing_okay_bee.json"),
      });
    };
    const changeAnimation = (path) => {
      this.setState(
        {
          animationPath: path,
        },
        () => {
          setTimeout(() => resetAnimation(), 5000);
        }
      );
    };
    return (
      <ImageBackground
        source={require("../assets/Green_ray_burst.jpg")}
        style={styles.background}
      >
        <View style={globalStyles.simpleContainer}>
          <View style={styles.body}>
            <VirtualPet animationPath={this.state.animationPath} size={400} />
            <TouchableOpacity onPress={() => toggleGift()}>
              <View style={styles.giftButton}>
                <FontAwesome5 name="gift" size={34} color="white" />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.header}>
            <Balance balance={this.state.balance} points={this.state.points} />
            {/* <View
            style={{
              flexDirection: "row",
              paddingBottom: 120,
              paddingRight: 280,
              position: "absolute",
            }}
            >
            <TouchableOpacity onPress={() => takeBalance(100)}>
              <View style={globalStyles.backButton}>
                <View style={globalStyles.backInner}>
                  <AntDesign name="minus" size={10} color="white" />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => addBalance(100)}>
              <View style={globalStyles.backButton}>
                <View style={globalStyles.backInner}>
                  <AntDesign name="plus" size={10} color="white" />
                </View>
              </View>
            </TouchableOpacity>
          </View> */}
          </View>

          <View style={styles.footer}>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("Status", {
                    balance: this.state.balance,
                    points: this.state.points,
                  })
                }
              >
                <RouteButton
                  textName="STATUS"
                  iconName="piggy-bank"
                  iconSize={44}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.button}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("Spelen", {
                    balance: this.state.balance,
                    points: this.state.points,
                  })
                }
              >
                <RouteButton
                  textName="SPELEN"
                  iconName="hand-holding-usd"
                  iconSize={40}
                />
              </TouchableOpacity>
            </View>
          </View>
          {renderIf(this.state.toggleAnimationType)(
            <Animatable.View
              animation={
                this.state.toggleAnimationType ? "fadeInDown" : "fadeOutUp"
              }
              style={styles.giftContainer}
            >
              <TouchableOpacity
                onPress={() => {
                  changeAnimation(
                    require("../assets/VirtualPet/eating_coco.json")
                  );
                }}
              >
                <FontAwesome5 name="cookie-bite" size={50} color="black" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  changeAnimation(
                    require("../assets/VirtualPet/paint_bee.json")
                  );
                }}
              >
                <FontAwesome5 name="paint-brush" size={50} color="black" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  changeAnimation(
                    require("../assets/VirtualPet/sleep_bee.json")
                  );
                }}
              >
                <MaterialCommunityIcons
                  name="power-sleep"
                  size={50}
                  color="black"
                />
              </TouchableOpacity>
            </Animatable.View>
          )}

          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "white",
    width: Dimensions.get("window").width * 0.9,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "lightgrey",
    position: "absolute",
    top: "3%",
    elevation: 16,
    shadowOffset: { width: 0, height: 8 },
    shadowColor: "#000",
    shadowOpacity: 0.44, // from 0 to 1
    shadowRadius: 10.32,
  },
  body: {
    backgroundColor: "rgba(255,255,255, 0.55)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    width: Dimensions.get("window").width * 1.35,
    height: Dimensions.get("window").width * 1.35,
  },
  giftContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    width: "60%",
    height: "12%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "space-evenly",
    bottom: "8%",
    elevation: 16,
    shadowOffset: { width: 0, height: 8 },
    shadowColor: "#000",
    shadowOpacity: 0.44, // from 0 to 1
    shadowRadius: 10.32,
    borderRadius: 10,
    borderColor: "lightgrey",
    borderWidth: 2,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "absolute",
    bottom: "1%",
    width: "90%",
  },
  giftButton: {
    backgroundColor: "#F3E55D",
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#D4AC0D",
    padding: 10,
    elevation: 16,
    shadowOffset: { width: 0, height: 8 },
    shadowColor: "#000",
    shadowOpacity: 0.44, // from 0 to 1
    shadowRadius: 10.32,
  },
});
