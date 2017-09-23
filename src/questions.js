const CREATE   = "multiple-choice/questions/CREATE";

// Questions taken from http://trivia.fyi/category/history-trivia
const initialState = [
  {
    question: "What is the acronym for the intergovernmental military alliance based on the North Atlantic Treaty, signed in 1949?",
    incorrectAnswers: ["SÄPO", "UN", "WWWC"],
    correctAnswer: "NATO"
  },
  {
    question: "What was the name of the currency used in Spain before the euro?",
    incorrectAnswers: ["Pesos", "Spanish Dollars", "Platanos"],
    correctAnswer: "Pesetas"
  },
  {
    question: "Which American inventor is generally given credit for the invention of the lightning rod?",
    incorrectAnswers: ["Thomas Edison", "Nikola Tesla", "Elon Musk"],
    correctAnswer: "Benjamin Franklin"
  },
  {
    question: "Jimmy Carter was the first U.S. president born in a what?",
    incorrectAnswers: ["Taxi", "Bathtub", "Airplane"],
    correctAnswer: "hospital"
  },
  {
    question: "In 1867 the United States purchased Alaska from what country?",
    incorrectAnswers: ["France", "Canada", "England"],
    correctAnswer: "Russia"
  },
  {
    question: "What battle was fought on June 18th, 1815 in present-day Belgium?",
    incorrectAnswers: ["Battle of the Somme", "Battle of Leipzig", "Battle of the Bulge"],
    correctAnswer: "Battle of Waterloo"
  },
  {
    question: "Jean-Paul Sartre and Le Duc Tho both declined to accept what famous international award?",
    incorrectAnswers: ["Grammy", "Pulitzer", "Fields Medal"],
    correctAnswer: "Nobel Prize"
  },
  {
    question: "The first human-made object to land on the moon was launched by what country?",
    incorrectAnswers: ["USA", "Germany", "North Korea"],
    correctAnswer: "USSR"
  }
]

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    default: 
      return state;
  }
}

export function createQuestion(question) {
  return {
    type: CREATE,
    question
  }
}