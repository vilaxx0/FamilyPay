import React, { Component } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

import { Alert } from "../../components/Alert";
import Button from "../../components/betaal_answer_button";

export default class Betaal_Minder extends Component {
  state = {
    correctCount: 0,
    heartsLeft: 1, //3 originally
    totalCount: this.props.route.params.questions.length,
    activeQuestionIndex: 0,
    answered: false,
    answerCorrect: false,
    answerIncorrect: false,
  };

  answer = (correct) => {
    this.setState(
      (state) => {
        const nextState = { answered: true };
        if (correct) {
          nextState.correctCount = state.correctCount + 1;
          nextState.answerCorrect = true;
        } else {
          nextState.heartsLeft = state.heartsLeft - 1;
          nextState.answerCorrect = false;
        }

        return nextState;
      },
      () => {
        setTimeout(() => this.nextQuestion(), 750);
      }
    );
  };

  nextQuestion = () => {
    this.setState((state, props) => {
      const nextIndex = state.activeQuestionIndex + 1;
      if (state.heartsLeft == 0) {
        return props.navigation.navigate("TryAgain", {
          userName: "Vilius",
          titleText:
            "Je hebt drie verkeerde vragen. Probeer het a.u.b. opnieuw.",
          screenName: "Betaal",
        });
      }
      if (nextIndex >= state.totalCount) {
        return props.navigation.navigate("Finish", {
          points: 10,
          userName: "Vilius",
          titleText: "Je hebt de quiz succesful voltooid!",
          eventName: "addPointsBetaal",
        });
      }

      return {
        activeQuestionIndex: nextIndex,
        answered: false,
      };
    });
  };

  render() {
    const questions = this.props.route.params.questions;
    const question = questions[this.state.activeQuestionIndex];

    const hearts = [];

    for (var i = 0; i < this.state.heartsLeft; i++) {
      hearts.push(
        <Image
          key={i}
          source={require("../../assets/mainHeart.png")}
          style={{ width: 40, height: 40, marginHorizontal: 2 }}
        />
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <View style={{ flexDirection: "row", padding: 5 }}>{hearts}</View>
          <Text style={styles.questionCountText}>
            {`${this.state.activeQuestionIndex + 1}/${this.state.totalCount}`}
          </Text>

          <View style={styles.topPart}>
            <Text style={{ fontSize: 75, fontFamily: "righteous-regular" }}>
              Quiz
            </Text>
            <Text
              style={{
                fontSize: 35,
                fontFamily: "righteous-regular",
                color: "#F3E55D",
              }}
            >
              10 punten
            </Text>
            <Image
              style={{ width: 280, height: 300 }}
              source={question.picture}
            />
            <Text style={styles.questionText}>{question.question}</Text>
          </View>
          <View style={styles.bottomPart}>
            <FlatList
              keyExtractor={(item) => item.id}
              data={question.answers}
              renderItem={({ item }) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => this.answer(item.correct)}
                >
                  <Button iconName={item.icon} iconSize={55} text={item.text} />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        <Alert
          correct={this.state.answerCorrect}
          visible={this.state.answered}
        />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#56d756",
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "white",
    margin: 15,
    paddingHorizontal: 20,
  },
  questionCountText: {
    color: "lightgrey",
    fontSize: 24,
    fontWeight: "bold",
  },
  topPart: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
  bottomPart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  questionText: {
    color: "#56d756",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
});
