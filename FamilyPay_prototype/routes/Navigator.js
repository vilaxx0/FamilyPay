import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/home";
import Transacties from "../screens/transacties";
import Status from "../screens/status";
import Spelen from "../screens/spelen";

import Categoriseer from "../screens/quizzes/categoriseer";
import Betaal_Minder from "../screens/quizzes/betaal_minder";
import Finish from "../screens/quizzes/finished";

export default function Navigator() {
  const Stack = createStackNavigator();
  return (
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
              fontSize: 40,
              fontFamily: "righteous-regular",
            },
          }}
        />
        <Stack.Screen
          name="Status"
          component={Status}
          options={{
            title: "STATUS",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#56d756",
              elevation: 0,
              shadowOpacity: 0,
            },
            headerStatusBarHeight: 30,
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 40,
              fontFamily: "righteous-regular",
            },
          }}
        />
        <Stack.Screen
          name="Spelen"
          component={Spelen}
          options={{
            title: "SPELEN",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#56d756",
              elevation: 0,
              shadowOpacity: 0,
            },
            headerStatusBarHeight: 30,
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 40,
              fontFamily: "righteous-regular",
            },
          }}
        />
        <Stack.Screen
          name="Categoriseer"
          component={Categoriseer}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Betaal"
          component={Categoriseer}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Finish"
          component={Finish}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
