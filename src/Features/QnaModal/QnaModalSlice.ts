import { createSlice } from "@reduxjs/toolkit";
import { AnswerProps } from "../../Components/Answer";

export type QnaModalProps = {
  isOpen: boolean;
  isSubmitting: boolean;
};

const initialState: QnaModalProps = {
  isOpen: false,
  isSubmitting: false,
};

const QnaModalSlice = createSlice({
  name: "QnaModal",
  initialState: initialState,
  reducers: {
    openQnaModal: (state) => {
      state.isOpen = true;
    },
    closeQnaModal: (state) => {
      state.isOpen = false;
    },

    submittingQna: (state, action) => {
      state.isSubmitting = action.payload;
    },
  },
});

export const { openQnaModal, closeQnaModal, submittingQna } =
  QnaModalSlice.actions;
export default QnaModalSlice.reducer;
