import React, { Component } from "react";
import { Button, StyleSheet, View } from "react-native";

import LottieView from "lottie-react-native";

export default class VirtualPet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationPath: require("../assets/happy_bee.json"),
    };
  }
  componentDidMount() {
    this.animation.play();
    // To set a specific startFrame and endFrame with: this.animation.play(30, 120);
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

  render() {
    // const buttonHandler = (name) => {
    //   this.setState({ text: name });
    //   switch (name) {
    //     case "sitting":
    //       this.setState({ animationPath: require("../assets/bee.json") });
    //       this.animation.play();
    //       break;
    //     case "dying":
    //       this.setState({
    //         animationPath: require("../assets/dead_bee.json"),
    //       });
    //       this.animation.play();
    //       break;
    //     case "crying":
    //       this.setState({
    //         animationPath: require("../assets/crying_bee.json"),
    //       });
    //       this.animation.play();
    //       break;
    //     case "angry":
    //       this.setState({ animationPath: require("../assets/angry_bee.json") });
    //       this.animation.play();
    //       break;
    //     case "shy":
    //       this.setState({
    //         animationPath: require("../assets/doing_okay_bee.json"),
    //       });
    //       this.animation.play();
    //       break;
    //     case "happy":
    //       this.setState({
    //         animationPath: require("../assets/happy_bee_1.json"),
    //       });
    //       this.animation.play();
    //       break;
    //     case "feeling_cool":
    //       this.setState({ animationPath: require("../assets/cool_bee.json") });
    //       this.animation.play();
    //       break;
    //   }
    // };
    return (
        <View>
            <LottieView
            ref={(animation) => {
              this.animation = animation;
            }}
            style={styles.pet}
            source={this.state.animationPath}
          />
        </View>
          
    );
  }
}

const styles = StyleSheet.create({
  pet: {
    height: 350,
  },
});
