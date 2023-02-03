import { Link } from "react-router-dom";

export type QuestionProps = {
  text: string;
  username: string;
  postedAt: string;
  answers: string;
  questionID: string;
};

export const Question = ({
  text,
  username,
  postedAt,
  answers,
  questionID,
}: QuestionProps) => {
  return (
    <div className="h-auto bg-white shadow-lg mx-[4rem] my-6  flex flex-col p-[2rem]">
      {/* Text elements */}
      <div className="border-b-2 pb-8 p-4 flex flex-row items-center justify-center">
        {/* Question */}
        <Link to={`/questions/${questionID}`}>
          {" "}
          <p className="text-[1rem] mb-2">{text}</p>{" "}
        </Link>
        {/* Answer */}
      </div>
      {/* Description element */}

      <div className="mt-5 h-[3rem] flex flex-row items-center">
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-spiderman_3a64e546.jpeg?region=0%2C0%2C300%2C300"
          className="h-[2rem] w-[2rem] rounded-[50%]"
        />

        <p className=" ml-2 text-[0.75rem] text-[#497174]"> {username} </p>

        <p className="ml-2 text-[0.75rem] justify-self-end text-[#666666]">
          {" "}
          {postedAt}
        </p>
        {/* number of comments */}
        <div className="ml-auto flex flex-row items-center text-[0.75rem] p-[1rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#5f5f5f"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
            />
          </svg>

          <p className=" text-[.75rem] text-[#666666] ">{answers}</p>
        </div>
      </div>
    </div>
  );
};

{
  /* <button className="text-[.8rem] text-slate-600 bg-[#D6E4E5] p-2 ml-5 rounded-[0.4rem] hover:bg-slate-400">Answer</button> */
}
