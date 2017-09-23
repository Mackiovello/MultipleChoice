import React from "react";
import ReactDOM from "react-dom";
import FinishCard from "./FinishCard";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <MuiThemeProvider>
        <FinishCard onRestart={Function.prototype} correctAnswers={9} />
      </MuiThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
