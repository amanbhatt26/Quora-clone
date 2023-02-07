import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../Utils/firebase";
import { postComments } from "../../Utils/postComment";
import timeago from "../../Utils/timeago";

export type AnswerProps = {
  votes: number;
  question?: string | null | undefined;
  answer: string;
  username: string;
  postedAt: number;
  comments: { userId: string; text: string }[];
  questionID?: string | null | undefined;
  answerID: string;
};

export type PostButtonCallback = (e: string) => void;
export type PostCommentProps = {
  postButtonCallBack: PostButtonCallback;
};

export const Answer = ({
  votes,
  question,
  answer,
  username,
  postedAt,
  comments,
  questionID,
  answerID,
}: AnswerProps) => {
  const [user, loading] = useAuthState(auth);
  const [expanded, setExpanded] = useState(false);
  const [commentsList, setComments] = useState(comments);

  return (
    <div className="h-auto w-auto flex flex-col items-center justify-center  m-[2rem] shadow-lg ">
      <div className="h-auto w-full bg-white flex flex-row">
        {/* upvote component */}
        <div className="w-[10%] flex flex-col items-center justify-top p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
              fill="#D6E4E5"
              strokeWidth="0"
            />
          </svg>

          <p className="text-[0.90rem] text-slate-600">{votes}</p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              fill="#EB6440"
              strokeWidth="0"
            />
          </svg>
        </div>
        {/* description component */}
        <div className="w-[90%] p-[1.5rem] flex-1 flex flex-col justify-top items-center">
          {/* Text elements */}
          <div className="border-b-2 pb-8 w-full">
            {/* Question */}
            <Link to={`/questions/${questionID}`}>
              {question ? (
                <p className="text-[1rem] mb-2">{question}</p>
              ) : (
                <></>
              )}
            </Link>
            {/* Answer */}
            <Link to={`/questions/${questionID}`}>
              <p className="text-[0.8rem] text-slate-600">{answer}</p>
            </Link>
          </div>
          {/* Description element */}

          <div className="mt-5 h-[3rem] flex flex-row items-center w-full">
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-spiderman_3a64e546.jpeg?region=0%2C0%2C300%2C300"
              className="h-[2rem] w-[2rem] rounded-[50%]"
            />
            <p className="mx-2 text-[0.9rem] font-bold text-[#497174]">
              {" "}
              {username}
            </p>

            <p className="right text-[0.75rem] justify-self-end text-[#666666]">
              {" "}
              {timeago(postedAt)}
            </p>
            {/* number of comments */}
            <div
              className="flex flex-row items-center ml-auto text-[0.75rem] cursor-pointer"
              onClick={() => {
                setExpanded((prev) => !prev);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="w-6 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  fill="#C7BCA1"
                />
              </svg>
              <p className="mr-[1rem] md:mr-[2rem] text-[.75rem] text-[#666666] self-start">
                {comments.length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {expanded === true ? (
        <div className="w-full flex flex-col items-center justify-center">
          {user ? (
            <PostComment
              postButtonCallBack={async (text) => {
                if (!user) return;
                if (text.length < 1) {
                  alert("comment should not be empty ");
                  return;
                }
                const response = await postComments(
                  text,
                  user.displayName!,
                  answerID
                );

                if (!response.success) {
                  alert("could not post comment due to server errors");
                  return;
                }

                let newCommentList: { userId: string; text: string }[] = [
                  { userId: user.displayName!, text: text },
                  ...commentsList,
                ];

                setComments(newCommentList);
              }}
            />
          ) : (
            <p className="mt-2 text-[.8rem] text-slate-600">
              {" "}
              Login to post a comment
            </p>
          )}
          {commentsList.map(({ userId, text }) => {
            return (
              <div className="comment bg-white text-[0.8rem] mx-[2rem] text-slate-600 w-[80%] my-2 p-2 flex flex-col items-start border-l-4 border-slate-400">
                <div className="flex flex-row items-center justify-start">
                  <img
                    src="https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-spiderman_3a64e546.jpeg?region=0%2C0%2C300%2C300"
                    className="h-[1.4rem] w-[1.4rem] rounded-[50%]"
                  />
                  <p className="m-2 font-bold">{userId}</p>
                </div>
                <p className="">{text}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

const PostComment = ({ postButtonCallBack }: PostCommentProps) => {
  const [value, setValue] = useState("");
  const [posting, setPosting] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };
  return (
    <div className="flex w-[80%] my-[1.5rem] mx-[5rem]">
      <textarea
        className="flex-1 p-2 rounded-[.4rem] text-slate-600 text-[.8rem] focus:outline-[1px] focus:outline-slate-400"
        placeholder="write a comment..."
        value={value}
        onChange={(e) => handleChange(e)}
      />
      {!posting ? (
        <button
          className="text-white text-[.8rem] mx-6 bg-slate-600 px-[2rem] rounded-[.4rem] h-[2rem] hover:bg-gray-800"
          onClick={async () => {
            setPosting(true);
            await postButtonCallBack(value);
            setPosting(false);
            setValue("");
          }}
        >
          Post
        </button>
      ) : (
        <button className="text-white text-[.8rem] mx-6 bg-slate-600 px-[2rem] rounded-[.4rem] h-[2rem] hover:bg-gray-800">
          ...
        </button>
      )}
    </div>
  );
};
