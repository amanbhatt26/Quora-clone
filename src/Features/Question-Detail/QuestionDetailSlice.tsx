import { createSlice } from "@reduxjs/toolkit";
import { WithoutQuestionProps } from "../../Components/Answer";
import { QuestionProps } from "../../Components/Question";

export type QuestionDetailProps = {
  question: QuestionProps;
  answers: WithoutQuestionProps[];
};

const initialState: QuestionDetailProps = {
  question: {
    text: "Ea dolor et duis occaecat ipsum amet proident culpa anim qui officia.",
    username: "aman",
    postedAt: "2 hr ago",
    answers: "60+",
    questionID: "randomID",
  },
  answers: [
    {
      votes: 50,
      postedAt: "2hr ago",
      comments: "60+",
      username: "Aman",
      answer:
        "Proident consectetur magna mollit mollit anim reprehenderit labore culpa enim fugiat ex aliquip ipsum eiusmod. Commodo proident et occaecat tempor non ullamco consequat. Do cupidatat culpa nostrud id nulla. Pariatur adipisicing qui sunt duis ex ut pariatur ex cupidatat. Sit nostrud minim reprehenderit adipisicing culpa laboris anim fugiat exercitation aute sit Lorem sint.",
    },
  ],
};

const QuestionDetailSlice = createSlice({
  name: "QuestionDetail",
  initialState: initialState,
  reducers: {},
});

export default QuestionDetailSlice.reducer;
