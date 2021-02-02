import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  Platform,
} from "react-native";

import {
  MaterialCommunityIcons,
  FontAwesome,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { Fumi } from "react-native-textinput-effects";

import { globalStyles } from "../shared/globalStyles";
import BackButton from "../components/back_button";

import VirtualPet from "../components/VirtualPet";
import Modal from "react-native-modal";
import GoalComponent from "../components/goal";
import categoriseerQuestions from "../data/categoriseer_transacties";
import betaalQuestions from "../data/betaal_minder";

export default function Goals({ navigation, route }) {
  const [goals, setGoals] = useState([
    {
      id: "1",
      title: "Playstation 5",
      balanceGoal: 3500,
      daysToComplete: 65,
    },
    {
      id: "2",
      title: "Nike Air Shoes",
      balanceGoal: 900,
      daysToComplete: 3,
    },
  ]);
  const [goalModal, setGoalModal] = useState(false);
  const [newGoal, setNewGoal] = useState("");
  const [newGoalBalance, setNewGoalBalance] = useState(0);
  const [newGoalDaysLeft, setNewGoalDaysLeft] = useState(0);
  const addGoal = (goal) => {
    //goal.id = Math.random();
    goal.title = newGoal;
    goal.balanceGoal = newGoalBalance;
    goal.daysToComplete = newGoalDaysLeft;
    console.log(goal.id);
    setGoals((currentGoal) => {
      return [goal, ...currentGoal];
    });
    setGoalModal(false);
  };
  const removeGoal = (id) => {
    setGoals((prevGoals) => {
      return prevGoals.filter((goals) => goals.id != id);
    });
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackButton navigation={navigation} />,
    });
  }, [navigation]);
  const { balance } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <FlatList
          data={goals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <GoalComponent
                id={item.id}
                title={item.title}
                balance={balance}
                goalBalance={item.balanceGoal}
                daysLeft={item.daysToComplete}
                completed={balance > item.balanceGoal ? true : false}
                remove={removeGoal}
              />
            </View>
          )}
        />
      </View>
      <View
        style={{
          position: "absolute",

          right: 15,
          bottom: 15,
        }}
      >
        <TouchableOpacity onPress={() => setGoalModal(true)}>
          <View style={styles.button}>
            <View style={styles.buttonInner}>
              <FontAwesome5 name="plus" size={50} color="white" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      {/* Modal for adding a new goal */}
      <Modal
        isVisible={goalModal}
        onBackdropPress={() => setGoalModal(false)}
        backdropColor="white"
        backdropOpacity={0.4}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={1200}
        animationOutTiming={1200}
        backdropTransitionInTiming={1200}
        backdropTransitionOutTiming={1200}
      >
        <View style={styles.content}>
          <View style={{ paddingLeft: 40 }}>
            <Fumi
              label={"Doel titel"}
              iconClass={MaterialCommunityIcons}
              iconName={"bullseye-arrow"}
              iconColor={"#decc21"}
              iconSize={20}
              iconWidth={40}
              inputPadding={16}
              onChangeText={(newGoal) => {
                setNewGoal(newGoal);
              }}
            />
            <Fumi
              label={"Streefbalans (Huidig saldo: " + balance + ")"}
              iconClass={FontAwesome}
              iconName={"money"}
              iconColor={"#decc21"}
              iconSize={20}
              iconWidth={40}
              inputPadding={16}
              //inputStyle={text}
              keyboardType={"number-pad"}
              onChangeText={(newGoal) => {
                setNewGoalBalance(newGoal);
              }}
            />
            <Fumi
              label={"Dagen om te voltooien"}
              iconClass={MaterialIcons}
              iconName={"date-range"}
              iconColor={"#decc21"}
              iconSize={20}
              iconWidth={40}
              inputPadding={16}
              keyboardType={"number-pad"}
              onChangeText={(newGoal) => {
                setNewGoalDaysLeft(newGoal);
              }}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.modalLeft}>
              <VirtualPet
                animationPath={require("../assets/VirtualPet/head_from_left.json")}
                size={100}
              />
            </View>

            <View style={styles.modalRight}>
              <View>
                <TouchableOpacity onPress={(newGoal) => addGoal(newGoal)}>
                  <View
                    style={[
                      styles.modalButton,
                      { backgroundColor: "#56d756", borderColor: "#379137" },
                    ]}
                  >
                    <View
                      style={[
                        styles.modalInnerButton,
                        {
                          backgroundColor: "#56d756",
                          borderColor: "#379137",
                          paddingHorizontal: 70,
                        },
                      ]}
                    >
                      <Text style={styles.modalButtonText}>SPAREN</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={() => setGoalModal(false)}>
                  <View
                    style={[
                      styles.modalButton,
                      { backgroundColor: "#e35d49", borderColor: "#c94126" },
                    ]}
                  >
                    <View
                      style={[
                        styles.modalInnerButton,
                        {
                          backgroundColor: "#e35d49",
                          borderColor: "#c94126",
                          paddingHorizontal: 50,
                        },
                      ]}
                    >
                      <Text style={styles.modalButtonText}>ANNULEREN</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#56d756",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "white",
    marginHorizontal: 25,
    marginTop: 20,
    width: "90%",
    backgroundColor: "#56d756",
  },
  addButton: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 5,
    bottom: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3E55D",
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#D4AC0D",
    elevation: 16,
    shadowOffset: { width: 0, height: 8 },
    shadowColor: "#000",
    shadowOpacity: 0.44, // from 0 to 1
    shadowRadius: 10.32,
    width: 85,
    height: 85,
  },
  buttonInner: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3E55D",
    borderWidth: 2,
    borderRadius: 15,
    margin: 6,
    borderColor: "#D4AC0D",
  },
  modalButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  modalButton: {
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 15,
    padding: 5,
    elevation: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalInnerButton: {
    borderWidth: 2,
    borderRadius: 15,
    padding: 5,
  },

  modalButton: {
    backgroundColor: "#F3E55D",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 15,
    padding: 5,
    margin: 5,
    elevation: 16,
    shadowOffset: { width: 0, height: 8 },
    shadowColor: "#000",
    shadowOpacity: 0.44, // from 0 to 1
    shadowRadius: 10.32,
    marginHorizontal: 25,
  },

  content: {
    //paddingVertical: 10,
    justifyContent: "center",
    alignItems: "stretch",
    borderRadius: 15,
    height: Dimensions.get("window").height * 0.4,
    borderWidth: 2,
    borderColor: "lightgrey",
    backgroundColor: "white",
  },
  contentTitle: {
    fontSize: 23,
    marginBottom: 10,
    fontFamily: "righteous-regular",
    textAlign: "center",
  },
  modalLeft: {
    flex: 0.8,
    //justifyContent: "flex-end",
  },
  modalRight: {
    flex: 2.5,
    //alignItems: "center",
    justifyContent: "center",
  },
});
