import React from "react";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import Navigator from "./routes/Navigator";

export default function App() {
  let [fontsLoaded] = useFonts({
    "lobster-regular": require("./assets/fonts/Lobster-Regular.ttf"),
    "bangers-regular": require("./assets/fonts/Bangers-Regular.ttf"),
    "fredoka-regular": require("./assets/fonts/FredokaOne-Regular.ttf"),
    "fugaz-regular": require("./assets/fonts/FugazOne-Regular.ttf"),
    "righteous-regular": require("./assets/fonts/Righteous-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Navigator />;
  }
}
