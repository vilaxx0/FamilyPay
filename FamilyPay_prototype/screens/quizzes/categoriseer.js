import React, { Component, useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { Alert } from "../../components/Alert";
import Button from "../../shared/categoriseer_answer_button";

export default class Categoriseer extends Component {
  state = {
    correctCount: 0,
    incorrectCount: 0,
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
          nextState.incorrectCount = state.incorrectCount + 1;
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
      if (nextIndex >= state.totalCount) {
        return props.navigation.navigate("Finish", {
          points: 10,
          userName: "Vilius",
          titleText: "Je hebt de quiz succesful voltooid!",
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

    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.questionCountText}>
            {`${this.state.activeQuestionIndex + 1}/${this.state.totalCount}`}
          </Text>
          <Text style={styles.questionCountText}>
            {`Correct: ${this.state.correctCount} Incorrect: ${this.state.incorrectCount}`}
          </Text>
          <View style={styles.topPart}>
            <Text style={{ fontSize: 75, fontFamily: "righteous-regular" }}>
              - 15€
            </Text>
            <Text style={styles.questionText}>{question.question}</Text>
          </View>
          <View style={styles.bottomPart}>
            <Text style={styles.instructionText}>
              Selecteer de juiste categorie voor deze transactie
            </Text>
            <View
              style={{
                flexWrap: "wrap",
                //paddingTop: 10,
              }}
            >
              <FlatList
                numColumns={2}
                keyExtractor={(item) => item.id}
                data={question.answers}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => this.answer(item.correct)}>
                    <Button
                      iconName={item.icon}
                      iconSize={55}
                      text={item.text}
                    />
                  </TouchableOpacity>
                )}
              />
            </View>
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
    padding: 20,

    width: "93%",
  },
  questionCountText: {
    color: "lightgrey",
    fontSize: 24,
    fontWeight: "bold",
  },
  topPart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
  questionText: {
    color: "#f7b31d",
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
  },
  bottomPart: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  instructionText: {
    color: "#56d756",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
  },
});
