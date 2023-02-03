import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeScreen } from "../../Features/Navigation/NavSlice";
import { Answer, AnswerProps } from "../Answer";
import { Question } from "../Question/Question";

export const QuestionDetail = () => {
  const { question, answers } = useSelector(
    (state: any) => state.questionDetail
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeScreen("questionDetail"));
  }, []);

  return (
    <>
      <div className="scrollable-list h-full w-[100vw] md:w-[70vw] ml-10">
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
        {answers.map(
          ({
            votes,
            postedAt,
            comments,
            username,
            answer,
            questionID,
            question,
          }: AnswerProps) => {
            return (
              <Answer
                votes={votes}
                postedAt={postedAt}
                comments={comments}
                username={username}
                answer={answer}
                questionID={questionID}
                question={question}
              />
            );
          }
        )}
      </div>
      {/* Add question button */}

      <button className="fixed bottom-0 right-0 m-5 flex flex-row items-center justify-center w-[3rem] h-[3rem] rounded-[50%]  bg-[#86A3B8] text-white text-[1.5rem] p-1 hover:bg-slate-600 shadow-xl">
        <p>+</p>
      </button>
    </>
  );
};
