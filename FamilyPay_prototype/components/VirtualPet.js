import React, { Component } from "react";
import { View } from "react-native";

import LottieView from "lottie-react-native";

export default class VirtualPet extends Component {
  constructor(props) {
    super(props);
  }
  // componentWillReceiveProps(nextProps) {
  //   // Any time props.email changes, update state.
  //   if (nextProps.amount !== this.props.amount) {
  //     if (nextProps.amount < 300) {
  //       this.setState({
  //         animationPath: require("../assets/VirtualPet/dead_bee.json"),
  //       });
  //       this.animation.play();
  //     } else if (nextProps.amount < 600) {
  //       this.setState({
  //         animationPath: require("../assets/VirtualPet/crying_bee.json"),
  //       });
  //       this.animation.play();
  //     } else if (nextProps.amount < 1000) {
  //       this.setState({
  //         animationPath: require("../assets/VirtualPet/doing_okay_bee.json"),
  //       });
  //       this.animation.play();
  //     } else if (nextProps.amount < 1200) {
  //       this.setState({
  //         animationPath: require("../assets/VirtualPet/cool_bee.json"),
  //       });
  //       this.animation.play();
  //     } else if (nextProps.amount >= 1200) {
  //       this.setState({
  //         animationPath: require("../assets/VirtualPet/happy_bee.json"),
  //       });
  //       this.animation.play();
  //     }
  //   }
  // }
  componentDidMount() {
    this.animation.play();
    // To set a specific startFrame and endFrame with: this.animation.play(30, 120);
  }
  componentDidUpdate() {
    this.animation.play();
    // To set a specific startFrame and endFrame with: this.animation.play(30, 120);
  }
  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

  render() {
    const petSize = this.props.size;
    return (
      <View>
        <LottieView
          ref={(animation) => {
            this.animation = animation;
          }}
          style={{ height: petSize }}
          source={this.props.animationPath}
        />
      </View>
    );
  }
}
