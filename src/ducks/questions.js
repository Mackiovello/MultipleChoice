const ANSWER = "multiple-choice/questions/ANSWER";
const RESET_ANSWERS = "multiple-choice/questions/RESET_ANSWERS";

// Questions taken from http://trivia.fyi/category/history-trivia
const initialState = {
  questions: [
    "What is the acronym for the intergovernmental military alliance based on the North Atlantic Treaty, signed in 1949?",
    "What was the name of the currency used in Spain before the euro?",
    "Which American inventor is generally given credit for the invention of the lightning rod?",
    "Jimmy Carter was the first U.S. president born in a what?",
    "In 1867 the United States purchased Alaska from what country?",
    "What battle was fought on June 18th, 1815 in present-day Belgium?",
    "Jean-Paul Sartre and Le Duc Tho both declined to accept what famous international award?",
    "The first human-made object to land on the moon was launched by what country?"
  ],
  answers: [
    {
      incorrect: ["SÄPO", "UN", "WWWC"],
      correct: "NATO"
    },
    {
      incorrect: ["Pesos", "Spanish Dollars", "Platanos"],
      correct: "Pesetas"
    },
    {
      incorrect: ["Thomas Edison", "Nikola Tesla", "Elon Musk"],
      correct: "Benjamin Franklin"
    },
    {
      incorrect: ["Taxi", "Bathtub", "Airplane"],
      correct: "hospital"
    },
    {
      incorrect: ["France", "Canada", "England"],
      correct: "Russia"
    },
    {
      incorrect: [
        "Battle of the Somme",
        "Battle of Leipzig",
        "Battle of the Bulge"
      ],
      correct: "Battle of Waterloo"
    },
    {
      incorrect: ["Grammy", "Pulitzer", "Fields Medal"],
      correct: "Nobel Prize"
    },
    {
      incorrect: ["USA", "Germany", "North Korea"],
      correct: "USSR"
    }
  ],
  userAnswers: []
};

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
