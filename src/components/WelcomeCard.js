import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import { Card, Headline } from "./StyledComponents";
import PropTypes from "prop-types";

export default function WelcomeCard({ onStart }) {
  return (
    <Card>
      <Headline>Question Game!</Headline>
      <RaisedButton primary={true} onClick={onStart} label="start" />
    </Card>
  );
}

WelcomeCard.propTypes = {
  onStart: PropTypes.func.isRequired
};
