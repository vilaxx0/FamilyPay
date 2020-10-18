import React, { Component } from "react";
import { Button, StyleSheet, View } from "react-native";

import LottieView from "lottie-react-native";

export default class VirtualPet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationPath: require("../assets/VirtualPet/happy_bee.json"),
    };
  }
  componentWillReceiveProps(nextProps) {
    // Any time props.email changes, update state.
    if (nextProps.amount !== this.props.amount) {
      if (nextProps.amount < 300) {
        this.setState({
          animationPath: require("../assets/VirtualPet/dead_bee.json"),
        });
        this.animation.play();
      } else if (nextProps.amount < 600) {
        this.setState({
          animationPath: require("../assets/VirtualPet/crying_bee.json"),
        });
        this.animation.play();
      } else if (nextProps.amount < 1000) {
        this.setState({
          animationPath: require("../assets/VirtualPet/doing_okay_bee.json"),
        });
        this.animation.play();
      } else if (nextProps.amount < 1200) {
        this.setState({
          animationPath: require("../assets/VirtualPet/cool_bee.json"),
        });
        this.animation.play();
      } else if (nextProps.amount >= 1200) {
        this.setState({
          animationPath: require("../assets/VirtualPet/happy_bee.json"),
        });
        this.animation.play();
      }
    }
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
