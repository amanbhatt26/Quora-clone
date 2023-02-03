import { createSlice } from "@reduxjs/toolkit";
import { AnswerProps } from "../../Components/Answer";
import { QuestionProps } from "../../Components/Question";

export type NavProps = {
  tab: "home" | "questions" | "user" | "questionDetail";
};

const initialState: NavProps = {
  tab: "questions",
};

const NavSlice = createSlice({
  name: "Navigation",
  initialState: initialState,
  reducers: {
    changeScreen: (state, { payload }) => {
      state.tab = payload;
    },
  },
});

export const { changeScreen } = NavSlice.actions;

export default NavSlice.reducer;
