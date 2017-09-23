import { initialState } from "../utils";

export const ANSWER = "multiple-choice/questions/ANSWER";
export const RESET_ANSWERS = "multiple-choice/questions/RESET_ANSWERS";

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ANSWER:
      return {
        ...state,
        userAnswers: [...state.userAnswers, action.answer]
      };
    case RESET_ANSWERS:
      return {
        ...state,
        userAnswers: []
      };
    default:
      return state;
  }
}

export function answer(answer) {
  return {
    type: ANSWER,
    answer
  };
}

export function resetAnswers() {
  return {
    type: RESET_ANSWERS
  };
}
