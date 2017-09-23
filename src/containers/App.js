import React, { Component } from 'react';
import { connect } from "react-redux";
import RaisedButton from 'material-ui/RaisedButton';
import { Wrapper, Card, Headline } from "../components/StyledComponents";
import WelcomeCard from "../components/WelcomeCard";
import QuestionCard from "../components/QuestionCard";
import FinishCard from "../components/FinishCard";

class App extends Component {
  state = {
    currentQuestion: 0
  }

  incrementQuestion = () => {
    this.setState(prevState => {
      return { currentQuestion: ++prevState.currentQuestion }
    })
  }

  resetQuestion = () => {
    this.setState({ currentQuestion: 0 })
  }

  getCurrentCard = () => {
    const { currentQuestion } = this.state;

    if (currentQuestion === 0) {
      return <WelcomeCard onStart={this.incrementQuestion}/>
    } else if (currentQuestion <= 8) {
      return <QuestionCard 
        onAnswer={this.incrementQuestion} 
        answers={["one", "two", "tree", "four"]}
        question={"What is the answer?"}
      />
    } else {
      return <FinishCard correctAnswers={5} onRestart={this.resetQuestion} />
    }
  }

  render() {
    return (
      <Wrapper>
        {this.getCurrentCard()}
      </Wrapper>
    );
  }
}

export default connect()(App);
