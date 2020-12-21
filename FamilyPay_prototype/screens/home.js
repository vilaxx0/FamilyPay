import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Text,
  Image,
} from "react-native";
import { EventRegister } from "react-native-event-listeners";
import moment from "moment";
import { FontAwesome5 } from "@expo/vector-icons";
import RouteButton from "../components/route_button";
import VirtualPet from "../components/VirtualPet";
import Balance from "../components/Balance";
import * as Animatable from "react-native-animatable";
import renderIf from "render-if";
import { globalStyles } from "../shared/globalStyles";
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: 1000,
      points: 150,
      toggleAnimationType: false,
      animationPath: require("../assets/VirtualPet/doing_okay_bee.json"),
      categorizeDate: moment("2010-11-23"),
      betaalDate: moment("2010-11-23"),
    };
    //listener to add points after finishing quiz and set the date
    this.listener = EventRegister.addEventListener(
      "addPointsCategorize",
      (points) => {
        this.setState({
          points: this.state.points + points,
          categorizeDate: moment(),
        });
      }
    );
    this.listener = EventRegister.addEventListener(
      "addPointsBetaal",
      (points) => {
        this.setState({
          points: this.state.points + points,
          betaalDate: moment(),
        });
      }
    );
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
    const navigationCheck = (catDate, betDate) => {
      let catDays = moment().diff(moment(catDate), "days");
      let betDays = moment().diff(moment(betDate), "days");
      let cAvailable = false;
      let bAvailable = false;
      if (catDays >= 1) {
        cAvailable = true;
      }
      if (betDays >= 1) {
        bAvailable = true;
      }
      return this.props.navigation.navigate("Spelen", {
        balance: this.state.balance,
        points: this.state.points,
        categorizeAvailable: cAvailable,
        betaalAvailable: bAvailable,
      });
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
            <Balance
              balance={this.state.balance}
              points={this.state.points}
              title={"Je hebt al veel gespaard!"}
            />
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
                  navigationCheck(
                    this.state.categorizeDate,
                    this.state.betaalDate
                  )
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
                    require("../assets/VirtualPet/drunk_bee.json")
                  );
                }}
              >
                <Image
                  style={styles.activityIcon}
                  source={require("../assets/milk.png")}
                />
                <Text style={styles.activityText}>Milk</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  changeAnimation(
                    require("../assets/VirtualPet/eating_candy.json")
                  );
                }}
              >
                <Image
                  style={styles.activityIcon}
                  source={require("../assets/candy.png")}
                />
                <Text style={styles.activityText}>Snoepje</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  changeAnimation(
                    require("../assets/VirtualPet/sleep_bee.json")
                  );
                }}
              >
                <Image
                  style={styles.activityIcon}
                  source={require("../assets/pillow.png")}
                />
                <Text style={styles.activityText}>Kussentje</Text>
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
  activityIcon: {
    height: 50,
    width: 50,
  },
  activityText: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
  },
});
