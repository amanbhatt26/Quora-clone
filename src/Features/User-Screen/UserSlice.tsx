import { createSlice } from "@reduxjs/toolkit";
import { UserProps } from "../../Components/User-Screen";

const initialState: UserProps = {
  username: "Aman Bhatt",
  profession: "Web Developer",
  joinedAt: "2 days ago",
  answers: [
    {
      votes: 50,
      question:
        "Duis tempor est dolor fugiat enim veniam sit pariatur proident dolor amet.",
      answer:
        "Esse est dolor in sit aute cillum aliquip dolore dolor est duis elit eiusmod consequat. Culpa duis nostrud deserunt dolor ipsum est officia incididunt. Adipisicing nisi consectetur sint veniam.",
      username: "aman",
      postedAt: "2days ago",
      comments: [{ userID: "suparv", text: "good answer" }],
      questionID: "randomID",
    },
  ],
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
});

export const { changeTab } = UserSlice.actions;

export default UserSlice.reducer;
