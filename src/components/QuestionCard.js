import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import { Card, Headline } from "./StyledComponents";
import PropTypes from "prop-types";

export default function QuestionCard({ onAnswer, question, answers }) {
  return (
    <Card>
      <Headline>{question}</Headline>
      {answers.map(answer => 
        <button 
          key={answer} 
          onClick={onAnswer}>
          {answer}
        </button>
      )}
    </Card>
  )
}