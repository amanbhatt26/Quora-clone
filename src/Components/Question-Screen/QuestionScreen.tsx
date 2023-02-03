import { useSelector } from "react-redux";
import { Question, QuestionProps } from "../Question/Question";

export const QuestionScreen = () => {
  const { questions } = useSelector((state: any) => state.questionScreen);

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
      <button className="fixed bottom-0 right-0 m-5 flex flex-row items-center justify-center w-[3rem] h-[3rem] rounded-[50%]  bg-[#86A3B8] text-white text-[1.5rem] p-1 hover:bg-slate-600 shadow-xl">
        <p>+</p>
      </button>
    </>
  );
};
