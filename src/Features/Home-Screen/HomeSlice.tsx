import { createSlice } from "@reduxjs/toolkit";
import { AnswerProps } from "../../Components/Answer";

export type AnswerList = AnswerProps[];
export type HomeScreenStateProps = {
  answers: AnswerList;
};

const initialState: HomeScreenStateProps = {
  answers: [
    {
      votes: 31,
      question:
        "Amet cupidatat duis consectetur labore consequat consequat ipsum ullamco sint proident.",
      answer:
        "Et commodo et non magna aliqua sit culpa aliqua. Tempor fugiat ad magna cupidatat anim excepteur sit eiusmod. Amet cillum cillum ex esse adipisicing exercitation proident minim aliqua exercitation. Proident voluptate ea excepteur magna.",
      username: "aman",
      postedAt: 1672542306,
      comments: [{ userID: "suparv", text: "good answer" }],
      questionID: "randomID",
    },

    {
      votes: 31,
      question:
        "Amet cupidatat duis consectetur labore consequat consequat ipsum ullamco sint proident.",
      answer:
        "Et commodo et non magna aliqua sit culpa aliqua. Tempor fugiat ad magna cupidatat anim excepteur sit eiusmod. Amet cillum cillum ex esse adipisicing exercitation proident minim aliqua exercitation. Proident voluptate ea excepteur magna.",
      username: "aman",
      postedAt: 1672542306,
      comments: [{ userID: "suparv", text: "good answer" }],
      questionID: "randomID",
    },
  ],
};

const HomeScreenSlice = createSlice({
  name: "HomeScreen",
  initialState: initialState,
  reducers: {},
});

export default HomeScreenSlice.reducer;
