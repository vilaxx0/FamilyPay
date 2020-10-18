import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { globalStyles } from "../shared/globalStyles";

import Transaction from "../components/Transaction";
import TransactionButtton from "../shared/transaction_button";
import Balance from "../components/Balance";

export default function Transacties({ navigation }) {
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
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={globalStyles.backButton}>
            <View style={globalStyles.backInner}>
              <AntDesign name="back" size={28} color="white" />
            </View>
          </View>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.balanceContainer}>
          <Balance inAccount={1000} />
          <View style={{ flex: 1, marginTop: 30 }}>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                }}
              >
                <TransactionButtton textName="Transacties" />
              </View>
              <View
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                }}
              >
                <TransactionButtton textName="Lasten" />
              </View>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 30, fontWeight: "bold", padding: 5 }}>
                Geschiedenis
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#56d756",
                }}
              >
                Jouw transacties vind je dier
              </Text>
            </View>
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
    flex: 1.3,
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
