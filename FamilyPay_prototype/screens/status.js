import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";

import BackButton from "../components/back_button";
import Balance from "../components/Balance";
import VirtualPet from "../components/VirtualPet";
import Svg, { Path, G, Ellipse } from "react-native-svg";
import StatusPathEven from "../components/status_path_even";
import StatusPathOdd from "../components/status_path_odd";

export default function Status({ navigation, route }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackButton navigation={navigation} />,
    });
  }, [navigation]);
  const { balance, points } = route.params;
  const [week, setWeek] = useState(1);
  const [pathData, setPathData] = useState([
    {
      id: "2",
      title: "1 WEEK GELEDEN",
      money: "150",
      points: "10",
    },
    {
      id: "3",
      title: "2 WEEK GELEDEN",
      money: "200",
      points: "15",
    },
    {
      id: "4",
      title: "3 WEEK GELEDEN",
      money: "50",
      points: "5",
    },
    {
      id: "5",
      title: "4 WEEK GELEDEN",
      money: "250",
      points: "40",
    },
  ]);
  const getHeader = () => {
    return (
      <View>
        <View style={styles.statusHeader}>
          <Balance
            balance={JSON.stringify(balance)}
            points={JSON.stringify(points)}
            title={"Je hebt al veel gespaard!"}
          />
          <View style={{ alignSelf: "center" }}>
            <VirtualPet
              animationPath={require("../assets/VirtualPet/sitting_bee.json")}
              size={180}
            />
          </View>
        </View>
        <Svg width={400} height={25}>
          <Path fill="none" d="M-1 -1H401V26H-1z" />
          <G stroke="#bca788">
            <Path
              strokeLinecap="null"
              strokeLinejoin="null"
              strokeWidth={15}
              fill="none"
              d="M200 7.45773L200 50.89558"
            />
            <Ellipse
              ry={4}
              rx={4}
              cy={8.04007}
              cx={200.00378}
              strokeWidth={7}
              fill="#bca788"
            />
          </G>
        </Svg>
        <View style={styles.headerBorder}>
          <Svg width={400} height={57}>
            <Path fill="none" d="M-1 -1H401V58H-1z" />
            <G
              strokeLinecap="null"
              strokeLinejoin="null"
              fillOpacity="null"
              strokeWidth={15}
              stroke="#bca788"
              fill="none"
            >
              <Path d="M200 -0.57801L200 42.85983" />
              <Path
                strokeOpacity="null"
                d="M272.70033 49.94697L192.5 49.94697"
              />
            </G>
          </Svg>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.statusContainer}>
      <View style={styles.statusInnerContainer}>
        {/* We use ListHeaderComponent to fix 'VirtualizedLists should never be nested inside plain ScrollViews' Warning. */}
        <FlatList
          ListHeaderComponent={getHeader}
          data={pathData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =>
            Math.abs(item.id % 2) == 1 ? (
              <View style={{ backgroundColor: "#70cf97" }}>
                <StatusPathOdd
                  title={item.title}
                  balance={item.money}
                  points={item.points}
                  navigation={navigation}
                />
              </View>
            ) : (
              <View style={{ backgroundColor: "#70cf97" }}>
                <StatusPathEven
                  title={item.title}
                  balance={item.money}
                  points={item.points}
                  navigation={navigation}
                />
              </View>
            )
          }
        />
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
  },
  statusHeader: {
    flex: 1,
    paddingTop: 15,
  },
  headerBorder: {
    backgroundColor: "#70cf97",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
