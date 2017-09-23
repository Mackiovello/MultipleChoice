import React, { Component } from "react";
import { connect } from "react-redux";
import { Wrapper } from "../components/StyledComponents";
import WelcomeCard from "../components/WelcomeCard";
import QuestionCard from "../components/QuestionCard";
import FinishCard from "../components/FinishCard";
import { answer as submitAnswer, resetAnswers } from "../ducks/questions";
import { scrambleArray } from "../utils";

class App extends Component {
  state = {
    questionIndex: 0,
    currentCard: "welcome"
  };

  nextQuestion = () => {
    if (this.state.questionIndex === this.props.questions.length - 1) {
      this.setState({ currentCard: "finish" });
      return;
    }

    this.setState(prevState => {
      return { questionIndex: ++prevState.questionIndex };
    });
  };

  resetHandler = () => {
    this.props.dispatch(resetAnswers());
    this.setState({
      questionIndex: 0,
      currentCard: "welcome"
    });
  };

  handleStart = () => {
    this.setState({ currentCard: "question" });
  };

  handleAnswer = answer => {
    this.props.dispatch(submitAnswer(answer));
    this.nextQuestion();
  };

  calculateScore = () => {
    const { answers, userAnswers } = this.props;

    let score = 0;

    answers.forEach((answer, i) => {
      if (answer.correct === userAnswers[i]) {
        ++score;
      }
    });

    return score;
  };

  getCurrentCard = () => {
    const { questionIndex, currentCard } = this.state;
    const { answers, questions } = this.props;

    switch (currentCard) {
      case "welcome":
        return <WelcomeCard onStart={this.handleStart} />;
      case "question":
        return (
          <QuestionCard
            onAnswer={this.handleAnswer}
            answers={scrambleArray([
              ...answers[questionIndex].incorrect,
              answers[questionIndex].correct
            ])}
            question={questions[questionIndex]}
          />
        );
      case "finish":
        return (
          <FinishCard
            correctAnswers={this.calculateScore()}
            onRestart={this.resetHandler}
          />
        );
      default:
        throw new TypeError(
          "The card has to be 'welcome', 'question', or 'finish'"
        );
    }
  };

  render() {
    return (
      <Wrapper>
        {this.getCurrentCard()}
      </Wrapper>
    );
  }
}

export default connect(state => state)(App);
