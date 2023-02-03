import { configureStore } from "@reduxjs/toolkit";
import HomeScreenReducer from "./Features/Home-Screen/HomeSlice";
import QuestionScreenReducer from "./Features/Questions-Screen/QuestionsSlice";
import UserScreenReducer from "./Features/User-Screen/UserSlice";
import QuestionDetailReducer from "./Features/Question-Detail/QuestionDetailSlice";
import NavigationReducer from "./Features/Navigation/NavSlice";

export const store = configureStore({
  reducer: {
    homeScreen: HomeScreenReducer,
    questionScreen: QuestionScreenReducer,
    userScreen: UserScreenReducer,
    questionDetail: QuestionDetailReducer,
    navigation: NavigationReducer,
  },
});
