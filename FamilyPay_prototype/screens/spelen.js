import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, FlatList, ScrollView } from "react-native";

import { globalStyles } from "../shared/globalStyles";
import BackButton from "../shared/back_button";
import Balance from "../components/Balance";
import VirtualPet from "../components/VirtualPet";
import SpelenCard from "../components/Spelen_Card";

export default function Spelen({ navigation, route }) {
  const [quiz, setQuiz] = useState([
    {
      id: "1",
      title: "Categoriseer transacties",
      points: "5 punten per transactie",
      colorCode: "#9370DB",
      quiz_screen_name: "Categoriseer",
    },
    {
      id: "2",
      title: "Betaal minder",
      points: "10 punten",
      colorCode: "#00BFFF",
      quiz_screen_name: "Betaal",
    },
    {
      id: "3",
      title: "Verdubble je geld",
      points: "10 punten",
      colorCode: "#9ACD32",
      quiz_screen_name: "Finish",
    },
  ]);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackButton navigation={navigation} />,
    });
  }, [navigation]);
  const { balance, points } = route.params;
  return (
    <View style={globalStyles.spelenContainer}>
      <View style={globalStyles.spelenInnerContainer}>
        <ScrollView>
          <View style={globalStyles.spelenHeader}>
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

          <View style={globalStyles.spelenFooter}>
            <FlatList
              data={quiz}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <SpelenCard item={item} />}
            />
          </View>
        </ScrollView>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
