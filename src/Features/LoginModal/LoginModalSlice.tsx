import { createSlice } from "@reduxjs/toolkit";
import { AnswerProps } from "../../Components/Answer";

export type LoginModalProps = {
  isOpen: boolean;
};

const initialState: LoginModalProps = {
  isOpen: false,
};

const LoginModalSlice = createSlice({
  name: "LoginModal",
  initialState: initialState,
  reducers: {
    openLoginModal: (state) => {
      state.isOpen = true;
    },
    closeLoginModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openLoginModal, closeLoginModal } = LoginModalSlice.actions;
export default LoginModalSlice.reducer;
