import { initialState } from "../utils";
import reducer, {
  answer,
  resetAnswers,
  ANSWER,
  RESET_ANSWERS
} from "./questions";

describe("answer action creator", () => {
  it("should create an action to add an answer", () => {
    const userAnswer = "MyAnswer";
    const expectedAction = {
      type: ANSWER,
      answer: userAnswer
    };
    expect(answer(userAnswer)).toEqual(expectedAction);
  });
});

describe("reset answers action creator", () => {
  it("should create an action to reset all answers", () => {
    const expectedAction = {
      type: RESET_ANSWERS
    };
    expect(resetAnswers()).toEqual(expectedAction);
  });
});

describe("reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle ANSWER", () => {
    expect(
      reducer(initialState, {
        type: ANSWER,
        answer: "MyAnswer"
      })
    ).toEqual({
      ...initialState,
      userAnswers: ["MyAnswer"]
    });

    expect(
      reducer(
        reducer(initialState, {
          type: ANSWER,
          answer: "MyAnswer"
        }),
        {
          type: ANSWER,
          answer: "AnotherAnswer"
        }
      )
    ).toEqual({
      ...initialState,
      userAnswers: ["MyAnswer", "AnotherAnswer"]
    });
  });

  it("should handle RESET_ANSWER", () => {
    expect(
      reducer(initialState, {
        type: RESET_ANSWERS
      })
    ).toEqual(initialState);

    expect(
      reducer(
        {
          ...initialState,
          userAnswers: ["one answer"]
        },
        { type: RESET_ANSWERS }
      )
    ).toEqual({
      ...initialState,
      userAnswers: []
    });
  });
});
