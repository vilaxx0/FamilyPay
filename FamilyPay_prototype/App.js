import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/home";
import Transacties from "./screens/transacties";
import Goals from "./screens/goals";
import Verdien from "./screens/verdien";

export default function App() {
  const Stack = createStackNavigator();
  return (
    //<Navigator />
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Transacties"
          component={Transacties}
          options={{
            title: "TRANSACTIES",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#56d756",
              elevation: 0,
              shadowOpacity: 0,
            },
            headerStatusBarHeight: 30,
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 32,
            },
          }}
        />
        <Stack.Screen
          name="Goals"
          component={Goals}
          options={{
            title: "GOALS",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#56d756",
              elevation: 0,
              shadowOpacity: 0,
            },
            headerStatusBarHeight: 30,
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 32,
            },
          }}
        />
        <Stack.Screen
          name="Verdien"
          component={Verdien}
          options={{
            title: "VERDIEN",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#56d756",
              elevation: 0,
              shadowOpacity: 0,
            },
            headerStatusBarHeight: 30,
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 32,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
