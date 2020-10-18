import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Transaction({ item }) {
    return (
        <View style={styles.item}>
          <View style={styles.leftSide}>
            <Text style={styles.itemName}>{item.name}</Text>
            <View style={styles.dateContainer}>
                <Text style={styles.date}>{item.time} </Text>
                <Text style={styles.date}>{item.date}</Text>
            </View>
          </View>
          <View style={styles.rightSide}>
            <Text style={styles.textAmount}>{item.amount}</Text>
          </View>
        </View>
    );
  }
  const styles = StyleSheet.create({
    item: {
      flexDirection: "row",
      paddingHorizontal: 10,
      paddingBottom: 15,
      marginHorizontal: 10,
      marginBottom: 5,
      marginTop: 15,
      borderBottomColor: "lightgrey",
      borderBottomWidth: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    leftSide:{

      flexDirection: "column",
      
    },
    rightSide:{
      
    },
    textAmount: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    dateContainer: {
        flexDirection: "row",
    },
    itemName:{
      fontSize: 20,
      
    },
    date: {
      fontSize: 15,
      color: 'grey',
    },
  });
