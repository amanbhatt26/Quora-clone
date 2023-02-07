import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { openLoginModal } from "../../Features/LoginModal/LoginModalSlice";
import { changeScreen } from "../../Features/Navigation/NavSlice";
import { openQnaModal } from "../../Features/QnaModal/QnaModalSlice";
import { getQuestions } from "../../Features/Questions-Screen/QuestionsSlice";
import { AppDispatch } from "../../store";
import { auth } from "../../Utils/firebase";
import { Question, QuestionProps } from "../Question/Question";

export const QuestionScreen = () => {
  const { questions, isQuestionsLoading } = useSelector(
    (state: any) => state.questionScreen
  );
  const [user, loading] = useAuthState(auth);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(changeScreen("questions"));
    dispatch(getQuestions());
  }, []);

  const handleAddQuestion = () => {
    if (!user) {
      dispatch(openLoginModal());
      return;
    }

    dispatch(openQnaModal());

    // open add Question modal
  };

  if (isQuestionsLoading) return <div>Loading...</div>;
  return (
    <>
      <div className="scrollable-list h-full w-[100vw] md:w-[70vw] ml-10">
        {/* Question Components */}

        {questions.map(
          ({
            text,
            username,
            postedAt,
            answers,
            questionID,
          }: QuestionProps) => {
            return (
              <Question
                text={text}
                username={username}
                answers={answers}
                questionID={questionID}
                postedAt={postedAt}
              />
            );
          }
        )}
      </div>
      {/* Add question button */}
      <button
        className="fixed bottom-0 right-0 m-5 flex flex-row items-center justify-center w-[3rem] h-[3rem] rounded-[50%]  bg-[#86A3B8] text-white text-[1.5rem] p-1 hover:bg-slate-600 shadow-xl"
        onClick={() => handleAddQuestion()}
      >
        <p>+</p>
      </button>
    </>
  );
};
