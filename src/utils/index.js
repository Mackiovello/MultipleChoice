// Durstenfeld shuffle
export function scrambleArray(array) {
  let scrambled = [...array];
  for (let i = scrambled.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [scrambled[i], scrambled[j]] = [scrambled[j], scrambled[i]];
  }

  if (equalArrays(scrambleArray, array)) {
    scrambleArray(array);
  }

  return scrambled;
}

function equalArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  arr1.forEach((v, i) => {
    if (arr1[i] !== arr2[i]) return false;
  });

  return true;
}

export function calculateScore(answers, userAnswers) {
  let score = 0;

  answers.forEach((answer, i) => {
    if (answer.correct === userAnswers[i]) {
      ++score;
    }
  });

  return score;
}

// Questions taken from http://trivia.fyi/category/history-trivia
export const initialState = {
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
