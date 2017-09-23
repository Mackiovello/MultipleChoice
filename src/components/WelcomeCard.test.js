import React from "react";
import ReactDOM from "react-dom";
import WelcomeCard from "./WelcomeCard";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <MuiThemeProvider>
        <WelcomeCard onStart={Function.prototype} />
      </MuiThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
