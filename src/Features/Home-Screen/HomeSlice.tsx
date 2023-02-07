import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AnswerProps } from "../../Components/Answer";

export type AnswerList = AnswerProps[];
export type HomeScreenStateProps = {
  answers: AnswerList;
  isFeedLoading: boolean;
};

export const getFeed = createAsyncThunk("getFeed", async () => {
  return fetch(process.env.REACT_APP_GET_FEED_ENDPOINT as string, {
    method: "POST",
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
});

const initialState: HomeScreenStateProps = {
  answers: [],
  isFeedLoading: true,
};

const HomeScreenSlice = createSlice({
  name: "HomeScreen",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFeed.pending, (state) => {
      state.isFeedLoading = true;
    });
    builder.addCase(getFeed.fulfilled, (state, action) => {
      console.log(action.payload);
      if (action.payload.success === true) {
        let answers: AnswerList = [];
        const feed = action.payload.feed;
        Object.keys(feed).forEach((k) => {
          // console.log(k, feed[k]);
          if (!feed[k].text) return;
          if (feed[k].answerObject) {
            let answerObject = feed[k].answerObject;
            answers = [
              ...answers,
              {
                answer: answerObject.text,
                question: feed[k].text,
                questionID: feed[k].questionId,
                postedAt: answerObject.dateTime,
                username: answerObject.userId,
                likes: answerObject.likes,
                dislikes: answerObject.dislikes,
                comments: answerObject.comments,
                answerID: answerObject.answerId,
              },
            ];
          }
        });

        state.answers = answers;
      } else {
        state.answers = [];
      }
      state.isFeedLoading = false;
    });
    builder.addCase(getFeed.rejected, (state, action) => {
      state.isFeedLoading = false;
      console.log(action.payload);
    });
  },
});

export default HomeScreenSlice.reducer;
