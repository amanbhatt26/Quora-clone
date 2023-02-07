import { AnyAction, AsyncThunkAction, ThunkAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { getFeed } from "../../Features/Home-Screen/HomeSlice";
import { openLoginModal } from "../../Features/LoginModal/LoginModalSlice";
import { changeScreen } from "../../Features/Navigation/NavSlice";
import { openQnaModal } from "../../Features/QnaModal/QnaModalSlice";
import { AppDispatch } from "../../store";
import { auth } from "../../Utils/firebase";
import { Answer, AnswerProps } from "../Answer";
import { TopUsers } from "../TopUsers";

export const Home = () => {
  const { isFeedLoading, answers } = useSelector(
    (state: any) => state.homeScreen
  );
  const [user, loading] = useAuthState(auth);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(changeScreen("home"));
    dispatch(getFeed());
  }, []);

  if (isFeedLoading) return <div>Loading...</div>;
  const handleAddQuestion = () => {
    if (!user) {
      dispatch(openLoginModal());
      return;
    }

    dispatch(openQnaModal());

    // open add Question modal
  };
  return (
    <>
      {/* scrollable list component */}
      <div className="scrollable-list h-full w-[100vw] md:w-[70vw] ml-10">
        {/* Answer Components */}
        {answers.map(
          ({
            likes,
            dislikes,
            question,
            answer,
            username,
            postedAt,
            comments,
            questionID,
            answerID,
          }: AnswerProps) => {
            return (
              <Answer
                key={username}
                likes={likes}
                dislikes={dislikes}
                question={question}
                answer={answer}
                username={username}
                postedAt={postedAt}
                comments={comments}
                questionID={questionID}
                answerID={answerID}
              />
            );
          }
        )}
      </div>
      {/* Top users component */}
      <div className=" flex-1 flex flex-col h-full">
        <TopUsers />
      </div>
      <button
        className="fixed bottom-0 right-0 m-5 flex flex-row items-center justify-center w-[3rem] h-[3rem] rounded-[50%]  bg-[#86A3B8] text-white text-[1.5rem] p-1 hover:bg-slate-600 shadow-xl"
        onClick={() => handleAddQuestion()}
      >
        <p>+</p>
      </button>
    </>
  );
};
