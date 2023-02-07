import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserProps } from "../../Components/User-Screen";
import { AnswerList } from "../Home-Screen/HomeSlice";
import { QuestionList } from "../Questions-Screen/QuestionsSlice";

export const getQuestionsByUserId = createAsyncThunk(
  "getQuestionsByUserId",
  async (userId: string | null | undefined) => {
    if (!userId) {
      return;
    }
    return fetch(process.env.REACT_APP_GET_QUESTIONS_ENDPOINT as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: userId }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }
);

export const getAnswersByUserId = createAsyncThunk(
  "getAnswersByUserId",
  async (userId: string | null | undefined) => {
    if (!userId) {
      return;
    }
    return fetch(process.env.REACT_APP_GET_ANSWERS_ENDPOINT as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: userId }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }
);

const initialState: UserProps = {
  username: "---",
  profession: "---",
  joinedAt: 1672542306,
  answers: [],
  questions: [],
  tab: "questions",
};

const UserSlice = createSlice({
  name: "UserScreen",
  initialState: initialState,
  reducers: {
    changeTab: (state, { payload }) => {
      state.tab = payload;
    },
  },

  extraReducers(builder) {
    builder.addCase(getAnswersByUserId.fulfilled, (state, action) => {
      if (!action.payload.success) {
        return;
      }

      const { questionText, questionDateTime, questionUserId } = action.payload;

      const allAnswers = action.payload.allAnswers;
      let answers: AnswerList = [];
      let questionIdOutside = "";
      Object.keys(allAnswers).forEach((k) => {
        // console.log(k, allQuestions[k]);

        if (!allAnswers[k].text) {
          console.log("no text object for question id ", k);
          return;
        }
        const {
          text,
          likes,
          userId,
          questionId,
          comments,
          dateTime,
          dislikes,
          answerId,
        } = allAnswers[k];
        answers = [
          ...answers,
          {
            likes: likes,
            dislikes: dislikes,
            answer: text,
            username: userId,
            postedAt: dateTime,
            comments: comments,
            answerID: answerId,
            questionID: questionId,
          },
        ];

        questionIdOutside = questionId;
      });

      state.answers = answers;
    });

    builder.addCase(getQuestionsByUserId.fulfilled, (state, action) => {
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
  },
});

export const { changeTab } = UserSlice.actions;

export default UserSlice.reducer;

// {
//   votes: 50,
//   question:
//     "Duis tempor est dolor fugiat enim veniam sit pariatur proident dolor amet.",
//   answer:
//     "Esse est dolor in sit aute cillum aliquip dolore dolor est duis elit eiusmod consequat. Culpa duis nostrud deserunt dolor ipsum est officia incididunt. Adipisicing nisi consectetur sint veniam.",
//   username: "aman",
//   postedAt: 1672542306,
//   comments: [{ userId: "suparv", text: "good answer" }],
//   questionID: "randomID",
//   answerID: "null",
// },

// {
//   text: "Ea dolor et duis occaecat ipsum amet proident culpa anim qui officia.",
//   username: "aman",
//   postedAt: 1641006306,
//   answers: [],
//   questionID: "randomID",
// },
// {
//   text: "Ea dolor et duis occaecat ipsum amet proident culpa anim qui officia.",
//   username: "aman",
//   postedAt: 1641006306,
//   answers: [],
//   questionID: "randomID",
// },
// {
//   text: "Ea dolor et duis occaecat ipsum amet proident culpa anim qui officia.",
//   username: "aman",
//   postedAt: 1641006306,
//   answers: [],
//   questionID: "randomID",
// },
// {
//   text: "Ea dolor et duis occaecat ipsum amet proident culpa anim qui officia.",
//   username: "aman",
//   postedAt: 1641006306,
//   answers: [],
//   questionID: "randomID",
// },
