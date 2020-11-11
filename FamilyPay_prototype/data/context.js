import React from "react";

export default React.createContext({
  balance: 1500,
  points: 300,
  addBalance: (balance) => {},
  addPoints: (points) => {},
});
//https://medium.com/dev-genius/react-native-state-management-with-context-api-61f63f5b099
export default function Home({ navigation, route }) {
  const [balance, setBalance] = useState(1500);
  const [points, setPoints] = useState(300);
  const [toggleAnimationType, setToggleAnimationType] = useState(false);

  // const addBalance = (amount) => {
  //   setBalance((prevState) => {
  //     return prevState + amount;
  //   });
  // };
  // const takeBalance = (amount) => {
  //   setBalance((prevState) => {
  //     return prevState - amount;
  //   });
  // };
  // useEffect(() => {
  //   if (route.params?.pointsToAdd) {
  //     //setPoints(points + route.params.pointsToAdd);
  //     console.log(route.params?.pointsToAdd);
  //   }
  // }, [route.params?.pointsToAdd]);

  const toggleGift = () => {
    setToggleAnimationType(!toggleAnimationType);
  };

  return (
    <ImageBackground
      source={require("../assets/Green_ray_burst.jpg")}
      style={styles.background}
    >
      <View style={globalStyles.simpleContainer}>
        <View style={styles.body}>
          <VirtualPet
            animationPath={require("../assets/VirtualPet/eating_coco.json")}
            size={400}
          />
          <TouchableOpacity onPress={() => toggleGift()}>
            <View style={styles.giftButton}>
              <FontAwesome5 name="gift" size={34} color="white" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.header}>
          <Balance balance={balance} points={points} />
          {/* <View
            style={{
              flexDirection: "row",
              paddingBottom: 120,
              paddingRight: 280,
              position: "absolute",
            }}
            >
            <TouchableOpacity onPress={() => takeBalance(100)}>
              <View style={globalStyles.backButton}>
                <View style={globalStyles.backInner}>
                  <AntDesign name="minus" size={10} color="white" />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => addBalance(100)}>
              <View style={globalStyles.backButton}>
                <View style={globalStyles.backInner}>
                  <AntDesign name="plus" size={10} color="white" />
                </View>
              </View>
            </TouchableOpacity>
          </View> */}
        </View>

        <View style={styles.footer}>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => navigation.navigate("Goals")}>
              <RouteButton
                textName="STATUS"
                iconName="piggy-bank"
                iconSize={44}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.button}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Spelen", {
                  balance: balance,
                  points: points,
                })
              }
            >
              <RouteButton
                textName="SPELEN"
                iconName="hand-holding-usd"
                iconSize={40}
              />
            </TouchableOpacity>
          </View>
        </View>
        {renderIf(toggleAnimationType)(
          <Animatable.View
            animation={toggleAnimationType ? "fadeInDown" : "fadeOutUp"}
            style={styles.giftContainer}
          ></Animatable.View>
        )}

        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}
