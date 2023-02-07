import { createSlice } from "@reduxjs/toolkit";
import { AnswerProps } from "../../Components/Answer";

export type AnswerModalProps = {
  isOpen: boolean;
  isSubmitting: boolean;
};

const initialState: AnswerModalProps = {
  isOpen: false,
  isSubmitting: false,
};

const AnsweModalSlice = createSlice({
  name: "AnsweModal",
  initialState: initialState,
  reducers: {
    openAnswerModal: (state) => {
      state.isOpen = true;
    },
    closeAnswerModal: (state) => {
      state.isOpen = false;
    },

    submittingAnswer: (state, { payload }) => {
      state.isSubmitting = payload;
    },
  },
});

export const { openAnswerModal, closeAnswerModal, submittingAnswer } =
  AnsweModalSlice.actions;
export default AnsweModalSlice.reducer;
