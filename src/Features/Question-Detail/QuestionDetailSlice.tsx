import { createSlice } from "@reduxjs/toolkit";
import { AnswerProps } from "../../Components/Answer";
import { QuestionProps } from "../../Components/Question";

export type QuestionDetailProps = {
  question: QuestionProps;
  answers: AnswerProps[];
};

const initialState: QuestionDetailProps = {
  question: {
    text: "Ea dolor et duis occaecat ipsum amet proident culpa anim qui officia.",
    username: "aman",
    postedAt: 1641006306,
    answers: "60+",
    questionID: "randomID",
  },
  answers: [
    {
      votes: 31,
      answer:
        "Et commodo et non magna aliqua sit culpa aliqua. Tempor fugiat ad magna cupidatat anim excepteur sit eiusmod. Amet cillum cillum ex esse adipisicing exercitation proident minim aliqua exercitation. Proident voluptate ea excepteur magna.",
      username: "aman",
      postedAt: 1672542306,
      comments: [{ userID: "suparv", text: "good answer" }],
    },

    {
      votes: 31,
      answer:
        "Et commodo et non magna aliqua sit culpa aliqua. Tempor fugiat ad magna cupidatat anim excepteur sit eiusmod. Amet cillum cillum ex esse adipisicing exercitation proident minim aliqua exercitation. Proident voluptate ea excepteur magna.",
      username: "aman",
      postedAt: 1672542306,
      comments: [{ userID: "suparv", text: "good answer" }],
      questionID: "randomID",
    },
  ],
};

const QuestionDetailSlice = createSlice({
  name: "QuestionDetail",
  initialState: initialState,
  reducers: {},
});

export default QuestionDetailSlice.reducer;
