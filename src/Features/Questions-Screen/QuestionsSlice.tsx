import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { QuestionProps } from "../../Components/Question";

export type QuestionList = QuestionProps[];
export type QuestionScreenStateProps = {
  isQuestionsLoading: boolean;
  questions: QuestionList;
};

export const getQuestions = createAsyncThunk("getQuestions", async () => {
  return fetch(process.env.REACT_APP_GET_QUESTIONS_ENDPOINT as string)
    .then((res) => res.json())
    .catch((error) => console.log(error));
});

const initialState: QuestionScreenStateProps = {
  questions: [],
  isQuestionsLoading: true,
};

const QuestionScreenSlice = createSlice({
  name: "QuestionsScreen",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getQuestions.pending, (state) => {
      state.isQuestionsLoading = true;
    });
    builder.addCase(getQuestions.fulfilled, (state, action) => {
      state.isQuestionsLoading = false;

      if (!action.payload.success) {
        return;
      }
      const allQuestions = action.payload.allQuestions;
      let questions: QuestionList = [];
      Object.keys(allQuestions).forEach((k) => {
        // console.log(k, allQuestions[k]);

        if (!allQuestions[k].text) {
          console.log("no text object for question id ", k);
          return;
        }
        const { text, userId, answerIds, dateTime, questionId } =
          allQuestions[k];
        questions = [
          ...questions,
          {
            text: text,
            username: userId,
            postedAt: dateTime,
            answers: answerIds,
            questionID: questionId,
          },
        ];
      });

      state.questions = questions;
    });
    builder.addCase(getQuestions.rejected, (state, action) => {
      state.isQuestionsLoading = false;
      console.log(action.payload);
    });
  },
});

export default QuestionScreenSlice.reducer;

// {
//   text: "Ea dolor et duis occaecat ipsum amet proident culpa anim qui officia.",
//   username: "aman",
//   postedAt: 1641006306,
//   answers: "60+",
//   questionID: "randomID",
// },
// {
//   text: "Ea dolor et duis occaecat ipsum amet proident culpa anim qui officia.",
//   username: "aman",
//   postedAt: 1641006306,
//   answers: "60+",
//   questionID: "randomID",
// },
// {
//   text: "Ea dolor et duis occaecat ipsum amet proident culpa anim qui officia.",
//   username: "aman",
//   postedAt: 1641006306,
//   answers: "60+",
//   questionID: "randomID",
// },
// {
//   text: "Ea dolor et duis occaecat ipsum amet proident culpa anim qui officia.",
//   username: "aman",
//   postedAt: 1641006306,
//   answers: "60+",
//   questionID: "randomID",
// },
