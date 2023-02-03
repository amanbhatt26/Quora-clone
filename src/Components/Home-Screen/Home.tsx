import { useSelector } from "react-redux";
import { Answer, AnswerProps } from "../Answer";
import { TopUsers } from "../TopUsers";

export const Home = () => {
  const { answers } = useSelector((state: any) => state.homeScreen);

  return (
    <>
      {/* scrollable list component */}
      <div className="scrollable-list h-full w-[100vw] md:w-[70vw] ml-10">
        {/* Answer Components */}
        {answers.map(
          ({
            votes,
            question,
            answer,
            username,
            postedAt,
            comments,
            questionID,
          }: AnswerProps) => {
            return (
              <Answer
                key={questionID}
                votes={votes}
                question={question}
                answer={answer}
                username={username}
                postedAt={postedAt}
                comments={comments}
                questionID={questionID}
              />
            );
          }
        )}
      </div>
      {/* Top users component */}
      <div className=" flex-1 flex flex-col h-full">
        <TopUsers />
      </div>
      <button className="fixed bottom-0 right-0 m-5 flex flex-row items-center justify-center w-[3rem] h-[3rem] rounded-[50%]  bg-[#86A3B8] text-white text-[1.5rem] p-1 hover:bg-slate-600 shadow-xl">
        <p>+</p>
      </button>
    </>
  );
};
