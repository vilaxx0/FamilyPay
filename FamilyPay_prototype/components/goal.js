import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Button,
  Image,
} from "react-native";
import renderIf from "render-if";
import * as Progress from "react-native-progress";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import VirtualPet from "../components/VirtualPet";
import Modal from "react-native-modal";

export default function Goal({
  id,
  title,
  balance,
  goalBalance,
  completed,
  remove,
  daysLeft,
}) {
  const navigation = useNavigation();
  const buttonColor = completed ? "#F3E55D" : "lightgrey";
  const [notCompletedText] = useState({ balance } / { goalBalance });
  const size = completed ? 0.25 : 0.2;
  return (
    <View
      style={[
        styles.container,
        { height: Dimensions.get("window").height * size },
      ]}
    >
      <View style={{ padding: 5, position: "absolute", right: 0 }}>
        <TouchableOpacity onPress={() => remove(id)}>
          <Image
            style={{ height: 30, width: 30 }}
            source={require("../assets/red_x.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={{ padding: 5, position: "absolute" }}>
        <Text style={styles.daysLeftTitle}>{daysLeft} Dagen Over</Text>
      </View>
      <View style={styles.topPart}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.progressText}>
          {balance}€ / {goalBalance}€
        </Text>
        <Progress.Bar
          progress={balance / goalBalance}
          width={300}
          color={"#F3E55D"}
          borderColor={"#D4AC0D"}
          height={10}
        />
      </View>
      {renderIf(completed)(
        <View style={styles.bottomPart}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("CompleteGoal", {
                points: 75,
                eventName: "addPointsGoal",
              })
            }
          >
            <View style={[styles.button, { backgroundColor: buttonColor }]}>
              <View
                style={[styles.innerButton, { backgroundColor: buttonColor }]}
              >
                <Text style={styles.buttonText}>COMPLEET</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 15,

    marginBottom: 15,
    borderWidth: 2,
    borderColor: "lightgrey",
    backgroundColor: "white",
  },
  topPart: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomPart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: Dimensions.get("window").width * 0.07,
    color: "black",
    fontFamily: "righteous-regular",
    paddingTop: 15,
    paddingBottom: 10,
  },
  progressText: {
    fontSize: Dimensions.get("window").width * 0.05,
    color: "black",
    fontFamily: "righteous-regular",
    paddingTop: 5,
    paddingBottom: 5,
  },
  daysLeftTitle: {
    fontSize: Dimensions.get("window").width * 0.045,
    color: "#e35d49",
    fontFamily: "righteous-regular",
    paddingTop: 5,
    paddingBottom: 5,
  },
  pointText: {
    fontSize: Dimensions.get("window").width * 0.055,
    fontFamily: "fugaz-regular",
    paddingTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  button: {
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#D4AC0D",
    padding: 5,
    elevation: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  innerButton: {
    borderWidth: 2,
    borderRadius: 15,
    padding: 5,
    borderColor: "#D4AC0D",
    paddingHorizontal: 50,
  },
  modalButton: {
    backgroundColor: "#F3E55D",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#D4AC0D",
    padding: 5,
    margin: 5,
    elevation: 16,
    shadowOffset: { width: 0, height: 8 },
    shadowColor: "#000",
    shadowOpacity: 0.44, // from 0 to 1
    shadowRadius: 10.32,
  },
  modalInnerButton: {
    backgroundColor: "#F3E55D",
    borderWidth: 2,
    borderRadius: 15,
    padding: 5,
    borderColor: "#D4AC0D",
  },
  content: {
    backgroundColor: "white",
    paddingVertical: 22,
    paddingRight: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 2,
    flexDirection: "row",
  },
  contentTitle: {
    fontSize: 23,
    marginBottom: 10,
    fontFamily: "righteous-regular",
    textAlign: "center",
  },
  modalLeft: {
    flex: 1,
    justifyContent: "flex-start",
  },

  modalRight: {
    flex: 2.5,
    alignItems: "center",
    justifyContent: "center",
  },
});
