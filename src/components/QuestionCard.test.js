import React from "react";
import ReactDOM from "react-dom";
import QuestionCard from "./QuestionCard";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <MuiThemeProvider>
        <QuestionCard
          onAnswer={Function.prototype}
          question={"What is the answer?"}
          answers={["answer1", "answer2", "answer3", "answer4"]}
        />
      </MuiThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
