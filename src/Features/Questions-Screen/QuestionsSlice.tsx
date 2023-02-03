import { createSlice } from "@reduxjs/toolkit";
import { AnswerProps } from "../../Components/Answer";
import { QuestionProps } from "../../Components/Question";

export type QuestionList = QuestionProps[];
export type QuestionScreenStateProps = {
  questions: QuestionList;
};

const initialState: QuestionScreenStateProps = {
  questions: [
    {
      text: "Ea dolor et duis occaecat ipsum amet proident culpa anim qui officia.",
      username: "aman",
      postedAt: "2 hr ago",
      answers: "60+",
      questionID: "randomID",
    },
    {
      text: "Ea dolor et duis occaecat ipsum amet proident culpa anim qui officia.",
      username: "aman",
      postedAt: "2 hr ago",
      answers: "60+",
      questionID: "randomID",
    },
    {
      text: "Ea dolor et duis occaecat ipsum amet proident culpa anim qui officia.",
      username: "aman",
      postedAt: "2 hr ago",
      answers: "60+",
      questionID: "randomID",
    },
  ],
};

const QuestionScreenSlice = createSlice({
  name: "QuestionsScreen",
  initialState: initialState,
  reducers: {},
});

export default QuestionScreenSlice.reducer;
