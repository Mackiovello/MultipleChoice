import { scrambleArray, calculateScore } from "./index";

describe("array scrambler", () => {
  const toScramble = ["first", "second", "third"];
  const scrambledArray = scrambleArray(toScramble);
  it("should return an array with the same length", () => {
    expect(toScramble.length).toEqual(scrambledArray.length);
  });
  it("should return an array that's not reference equal", () => {
    expect(toScramble).not.toBe(scrambledArray);
  });
  it("should return an array with the same values", () => {
    expect(toScramble).toEqual(expect.arrayContaining(scrambledArray));
    expect(scrambledArray).toEqual(expect.arrayContaining(toScramble));
  });
});

describe("calculate score", () => {
  const answers = [
    {
      correct: "Gandalf",
      incorrect: ["Harry", "Hagrid"]
    },
    {
      correct: "Sam",
      incorrect: ["Ron", "Cedric"]
    },
    {
      correct: "Frodo",
      incorrect: ["Snape", "Voldemort"]
    }
  ];
  const allCorrect = ["Gandalf", "Sam", "Frodo"];
  const allIncorrect = ["Harry", "Random Dude", "Hodor"];
  const oneCorrect = ["Harry", "Sam", "Snape"];

  it("should return right score if all are correct", () => {
    expect(calculateScore(answers, allCorrect)).toEqual(3);
  });
  it("should return right score if all are incorrect", () => {
    expect(calculateScore(answers, allIncorrect)).toEqual(0);
  });
  it("should return right score if some are correct", () => {
    expect(calculateScore(answers, oneCorrect)).toEqual(1);
  });
});
