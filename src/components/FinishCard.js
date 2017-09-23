import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import { Card, Headline } from "./StyledComponents";
import PropTypes from "prop-types";

export default function FinishCard({ correctAnswers, onRestart }) {
  return (
    <Card>
      <Headline>{correctAnswers} correct</Headline>
      <RaisedButton onClick={onRestart} label="reset" />
    </Card>
  )
}