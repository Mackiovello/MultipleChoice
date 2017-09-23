import React, { Component } from 'react';
import { connect } from "react-redux";
import RaisedButton from 'material-ui/RaisedButton';

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

    let headline;
    let onClickHandler;
    let buttonLabel;

    if (currentQuestion === 0) {
      headline = "Question Game";
      onClickHandler = this.incrementQuestion;
      buttonLabel = "start";
    } else if (currentQuestion <= 8) {
      headline = `Question ${currentQuestion}`;
      onClickHandler = this.incrementQuestion;
      buttonLabel = "start";
    } else {
      headline = "8/8 right";
      onClickHandler = this.resetQuestion;
      buttonLabel = "restart";
    }

    return (
      <div style={styles.card}>
        <h1 style={styles.headline}>{headline}</h1>
        <RaisedButton primary={true} onClick={onClickHandler} label={buttonLabel} />
      </div>
    )
  }

  render() {
    return (
      <div style={styles.wrapper}>
        {this.getCurrentCard()}
      </div>
    );
  }
}

const styles = {
  wrapper: {
    height: "100vh",
    backgroundColor: "#f2f2f2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    width: "300px",
    height: "400px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    boxShadow: "0 3px 3px #ccc"
  },
  headline: {
    fontWeight: "normal",
    fontFamily: "'Roboto', sans-serif"
  }
}

export default connect()(App);
