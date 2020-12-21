import { StatusBar } from "expo-status-bar";
import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import BackButton from "../components/back_button";
import Transaction from "../components/Transaction";
import Balance from "../components/Balance";

import VirtualPet from "../components/VirtualPet";

export default function Transacties({ navigation, route }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackButton navigation={navigation} />,
    });
  }, [navigation]);
  const { balance, points } = route.params;
  const [transactions, setTransactions] = useState([
    {
      id: "1",
      name: "Starbucks",
      time: "08:15",
      date: "Sep 18 2020",
      amount: "-8.50€",
    },
    {
      id: "2",
      name: "Primark",
      time: "16:18",
      date: "Sep 17 2020",
      amount: "-23.60€",
    },
    {
      id: "3",
      name: "H&M",
      time: "14:44",
      date: "Sep 17 2020",
      amount: "-110.50€",
    },
    {
      id: "4",
      name: "Dominos pizza",
      time: "20:22",
      date: "Sep 15 2020",
      amount: "-15.00€",
    },
    {
      id: "5",
      name: "Salary",
      time: "09:00",
      date: "Sep 12 2020",
      amount: "+850.16€",
    },
    {
      id: "6",
      name: "Jumbo",
      time: "19:50",
      date: "Aug 28 2020",
      amount: "-56.90€",
    },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.balanceContainer}>
          <Balance
            balance={balance}
            points={points}
            title={"Van Jan 1 tot Jan 7"}
          />
          <View style={{ alignSelf: "center" }}>
            <VirtualPet
              animationPath={require("../assets/VirtualPet/sitting_bee.json")}
              size={180}
            />
          </View>
        </View>

        <View style={styles.transactionsList}>
          <FlatList
            data={transactions}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Transaction item={item} />}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#56d756",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "white",
    margin: 15,
    padding: 15,
  },
  transactionsList: {
    flex: 1,
    paddingTop: 10,
  },
  balanceContainer: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
  },
  buttons: {
    flexDirection: "row",
  },
});
