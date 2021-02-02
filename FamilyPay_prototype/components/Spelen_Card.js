import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Button,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import VirtualPet from "../components/VirtualPet";
import Modal from "react-native-modal";

export default function SpelenCard({ item, data, available }) {
  const color = item.colorCode;
  const navigation = useNavigation();
  const buttonColor = available ? "#F3E55D" : "lightgrey";
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <View style={styles.topPart}>
        <Text style={styles.titleText}>"{item.title}"</Text>
        <Text style={styles.pointText}>Quiz - {item.points}</Text>
      </View>
      <View style={styles.bottomPart}>
        <TouchableOpacity
          onPress={() =>
            available
              ? navigation.navigate(item.quiz_screen_name, {
                  questions: data,
                })
              : setModalVisible(true)
          }
        >
          <View style={[styles.button, { backgroundColor: buttonColor }]}>
            <View
              style={[styles.innerButton, { backgroundColor: buttonColor }]}
            >
              <Text style={styles.buttonText}>START</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <Modal
        isVisible={modalVisible}
        //animationType="slide"
        onBackdropPress={() => setModalVisible(false)}
        backdropColor={color}
        backdropOpacity={0.4}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={1200}
        animationOutTiming={1200}
        backdropTransitionInTiming={1200}
        backdropTransitionOutTiming={1200}
      >
        <View style={styles.content}>
          <View style={styles.modalLeft}>
            <VirtualPet
              animationPath={require("../assets/VirtualPet/head_from_left.json")}
              size={110}
            />
          </View>

          <View style={styles.modalRight}>
            <Text style={styles.contentTitle}>
              Deze uitdaging is binnen 24 uur beschikbaar!
            </Text>
            <View>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <View style={[styles.button, { backgroundColor: "#F3E55D" }]}>
                  <View
                    style={[styles.innerButton, { backgroundColor: "#F3E55D" }]}
                  >
                    <Text style={styles.buttonText}>CLOSE</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    height: Dimensions.get("window").height * 0.2,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: "lightgrey",
  },
  topPart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomPart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: Dimensions.get("window").width * 0.06,
    color: "white",
    fontFamily: "righteous-regular",
    paddingTop: 25,
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
