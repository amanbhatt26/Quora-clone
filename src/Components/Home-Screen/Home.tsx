import { Answer } from "../Answer";
import { TopUsers } from "../TopUsers";

export const Home = () => {
  return (
    <>
      {/* scrollable list component */}
      <div className="scrollable-list h-full w-[100vw] md:w-[70vw] ml-10">
        {/* Answer Components */}

        <Answer
          votes={50}
          question={
            "Officia deserunt proident in est culpa ullamco magna officia enim non nostrud."
          }
          answer="Enim eu id enim esse dolore anim Lorem aliquip commodo dolor ea magna occaecat esse. Qui aliquip in mollit sit consectetur consequat. Ut adipisicing consectetur est dolore sint proident do est qui officia."
          username="Aman"
          postedAt="2hr ago"
          comments="60+"
          questionID="questionID"
        />

        <Answer
          votes={50}
          question={
            "Officia deserunt proident in est culpa ullamco magna officia enim non nostrud."
          }
          answer="Enim eu id enim esse dolore anim Lorem aliquip commodo dolor ea magna occaecat esse. Qui aliquip in mollit sit consectetur consequat. Ut adipisicing consectetur est dolore sint proident do est qui officia."
          username="Aman"
          postedAt="2hr ago"
          comments="60+"
          questionID="questionID"
        />
        <Answer
          votes={50}
          question={
            "Officia deserunt proident in est culpa ullamco magna officia enim non nostrud."
          }
          answer="Enim eu id enim esse dolore anim Lorem aliquip commodo dolor ea magna occaecat esse. Qui aliquip in mollit sit consectetur consequat. Ut adipisicing consectetur est dolore sint proident do est qui officia."
          username="Aman"
          postedAt="2hr ago"
          comments="60+"
          questionID="questionID"
        />

        <Answer
          votes={50}
          question={
            "Officia deserunt proident in est culpa ullamco magna officia enim non nostrud."
          }
          answer="Enim eu id enim esse dolore anim Lorem aliquip commodo dolor ea magna occaecat esse. Qui aliquip in mollit sit consectetur consequat. Ut adipisicing consectetur est dolore sint proident do est qui officia."
          username="Aman"
          postedAt="2hr ago"
          comments="60+"
          questionID="questionID"
        />
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
