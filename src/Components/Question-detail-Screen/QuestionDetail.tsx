import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { openAnswerModal } from "../../Features/AnswerModal/AnswerModalSlice";
import { openLoginModal } from "../../Features/LoginModal/LoginModalSlice";
import { changeScreen } from "../../Features/Navigation/NavSlice";
import {
  getAnswersByQuestionId,
  setQuestionId,
} from "../../Features/Question-Detail/QuestionDetailSlice";
import { AppDispatch } from "../../store";
import { auth } from "../../Utils/firebase";
import { Answer, AnswerProps } from "../Answer";
import { Question } from "../Question/Question";

export const QuestionDetail = () => {
  const { id } = useParams();
  const { question, answers } = useSelector(
    (state: any) => state.questionDetail
  );
  const [user, loading] = useAuthState(auth);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setQuestionId(id));
    dispatch(changeScreen("questionDetail"));
    dispatch(getAnswersByQuestionId(id));
  }, []);

  const handleAddAnswer = () => {
    if (!user) {
      dispatch(openLoginModal());
      return;
    }
    dispatch(openAnswerModal());
  };
  return (
    <>
      <div className="scrollable-list h-full w-[100vw] md:w-[70vw] ml-10 flex flex-col">
        {/* Question */}

        <Question
          text={question.text}
          username={question.username}
          postedAt={question.postedAt}
          answers={question.answers}
          questionID={question.questionID}
        />
        <div className="h-1 w-auto shadow-md mx-[5rem]"></div>

        {/* Answers for the question */}
        {answers.length > 0 ? (
          answers.map(
            ({
              likes,
              dislikes,
              postedAt,
              comments,
              username,
              answer,
              questionID,
              question,
              answerID,
            }: AnswerProps) => {
              return (
                <Answer
                  likes={likes}
                  dislikes={dislikes}
                  postedAt={postedAt}
                  comments={comments}
                  username={username}
                  answer={answer}
                  questionID={questionID}
                  question={question}
                  answerID={answerID}
                />
              );
            }
          )
        ) : (
          <div className="text-[.8rem] text-slate-600 self-center">
            This Question has 0 answers
          </div>
        )}
      </div>
      {/* Add question button */}

      <button
        className="fixed bottom-0 right-0 m-5 flex flex-row items-center justify-center w-[3rem] h-[3rem] rounded-[50%]  bg-[#86A3B8] text-white text-[1.5rem] p-1 hover:bg-slate-600 shadow-xl"
        onClick={() => {
          handleAddAnswer();
        }}
      >
        <p>+</p>
      </button>
    </>
  );
};
