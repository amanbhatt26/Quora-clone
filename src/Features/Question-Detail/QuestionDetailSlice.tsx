import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AnswerProps } from "../../Components/Answer";
import { QuestionProps } from "../../Components/Question";
import { AnswerList } from "../Home-Screen/HomeSlice";

export type QuestionDetailProps = {
  question: QuestionProps;
  answers: AnswerProps[];
  questionId: string | undefined;
};
export const getAnswersByQuestionId = createAsyncThunk(
  "getAnswerByQuestionId",
  async (questionId: string | undefined) => {
    if (!questionId) return;
    console.log(questionId);

    const body = {
      questionId: questionId,
    };

    return fetch(process.env.REACT_APP_GET_ANSWERS_ENDPOINT as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));
  }
);
const initialState: QuestionDetailProps = {
  question: {
    text: "...",
    username: "---",
    postedAt: 0,
    answers: [],
    questionID: "---",
  },
  answers: [],
  questionId: undefined,
};

const QuestionDetailSlice = createSlice({
  name: "QuestionDetail",
  initialState: initialState,
  reducers: {
    setQuestionId: (state, action) => {
      state.questionId = action.payload;
    },
    updateAnswers: (state, action) => {
      let answer: AnswerProps = {
        votes: 0,
        answer: action.payload.text,
        username: action.payload.user,
        postedAt: Date.now(),
        comments: [],
        answerID: "randomID",
        questionID: state.questionId,
      };

      state.answers = [answer, ...state.answers];
    },
  },
  extraReducers(builder) {
    builder.addCase(getAnswersByQuestionId.fulfilled, (state, action) => {
      console.log(action.payload);

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
            votes: likes.length - dislikes.length,
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
      state.question = {
        text: questionText,
        username: questionUserId,
        postedAt: questionDateTime,
        answers: answers as unknown as string[],
        questionID: questionIdOutside,
      };
    });
  },
});
export const { setQuestionId, updateAnswers } = QuestionDetailSlice.actions;
export default QuestionDetailSlice.reducer;

// {
//   votes: 31,
//   answer:
//     "Et commodo et non magna aliqua sit culpa aliqua. Tempor fugiat ad magna cupidatat anim excepteur sit eiusmod. Amet cillum cillum ex esse adipisicing exercitation proident minim aliqua exercitation. Proident voluptate ea excepteur magna.",
//   username: "aman",
//   postedAt: 1672542306,
//   comments: [{ userID: "suparv", text: "good answer" }],
// },

// {
//   votes: 31,
//   answer:
//     "Et commodo et non magna aliqua sit culpa aliqua. Tempor fugiat ad magna cupidatat anim excepteur sit eiusmod. Amet cillum cillum ex esse adipisicing exercitation proident minim aliqua exercitation. Proident voluptate ea excepteur magna.",
//   username: "aman",
//   postedAt: 1672542306,
//   comments: [{ userID: "suparv", text: "good answer" }],
//   questionID: "randomID",
// },
