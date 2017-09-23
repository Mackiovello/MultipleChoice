import React from "react";
import FlatButton from "material-ui/FlatButton";
import { Card, Question } from "./StyledComponents";
import PropTypes from "prop-types";

export default function QuestionCard({ onAnswer, question, answers }) {
  return (
    <Card>
      <Question>
        {question}
      </Question>
      <div>
        {answers.map(answer =>
          <FlatButton
            key={answer}
            label={answer}
            fullWidth={true}
            onClick={() => onAnswer(answer)}
          />
        )}
      </div>
    </Card>
  );
}

QuestionCard.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired
};
