import { useDispatch, useSelector } from "react-redux";
import { Answer, AnswerProps } from "../Answer";
import { Question, QuestionProps } from "../Question";
import {
  changeTab,
  getAnswersByUserId,
  getQuestionsByUserId,
} from "../../Features/User-Screen/UserSlice";
import { useEffect } from "react";
import { changeScreen } from "../../Features/Navigation/NavSlice";
import { auth } from "../../Utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { SignOutOutline } from "../Icons";
import { Logout } from "../../Utils/login";
import { useNavigate } from "react-router-dom";
import timeago from "../../Utils/timeago";
import { getAnswersByQuestionId } from "../../Features/Question-Detail/QuestionDetailSlice";
import { AppDispatch } from "../../store";

export type UserProps = {
  username: string;
  profession: string;
  joinedAt: number;
  answers: AnswerProps[];
  questions: QuestionProps[];
  tab: "questions" | "answers";
};

export const User = () => {
  const { username, profession, joinedAt, answers, questions, tab }: UserProps =
    useSelector((state: any) => state.userScreen);
  const [user, loading] = useAuthState(auth);
  const dispatch = useDispatch<AppDispatch>();
  dispatch(changeScreen("user"));
  useEffect(() => {
    dispatch(changeScreen("user"));
  }, []);

  useEffect(() => {
    dispatch(getAnswersByUserId(user?.displayName));
    dispatch(getQuestionsByUserId(user?.displayName));
  }, [user]);

  const tabStyle: string = "m-2 p-2 hover:border-b-[0.5rem] cursor-pointer";
  const selectedTabStyle: string =
    "m-2 p-2 hover:border-b-[0.5rem] border-b-[0.5rem] cursor-pointer";

  const navigate = useNavigate();

  return (
    <>
      {user && (
        <div className="flex-1 h-full flex flex-col items-center text-slate-600">
          <div className="bg-white h-min w-[50vw] mt-10 flex flex-col justify-start items-center">
            <button
              className="absolute self-end m-2 cursor-pointer"
              onClick={() => {
                Logout();
                navigate("/");
              }}
            >
              {" "}
              <SignOutOutline className="w-6 h-6 " />
            </button>

            <div className="flex flex-row border-b-2 w-full p-2">
              <div className="p-2 m-2">
                <img
                  src={user.photoURL as string}
                  className="h-[10rem] w-[10rem] rounded-[50%]"
                />
              </div>
              <div className="flex flex-col items-start mt-10">
                <p className="text-[2rem] text-slate-600">{user.displayName}</p>
                <p>{profession}</p>

                <p className="text-[0.8rem]">
                  Joined {timeago(joinedAt * 1000)}
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-around w-full">
              <div
                onClick={() => {
                  dispatch(changeTab("questions"));
                }}
                className={tab === "questions" ? selectedTabStyle : tabStyle}
              >
                Questions
              </div>
              <div
                onClick={() => {
                  dispatch(changeTab("answers"));
                }}
                className={tab === "answers" ? selectedTabStyle : tabStyle}
              >
                Answers
              </div>
            </div>
          </div>

          {tab === "answers" ? (
            <div className="scrollable-list h-full w-[50vw]">
              {answers.map(
                ({
                  votes,
                  answer,
                  username,
                  postedAt,
                  comments,
                  questionID,
                  answerID,
                }) => {
                  return (
                    <Answer
                      votes={votes}
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
          ) : (
            <div className="scrollable-list h-full w-[50vw]">
              {questions.map(
                ({ text, username, postedAt, answers, questionID }) => {
                  return (
                    <Question
                      text={text}
                      username={username}
                      postedAt={postedAt}
                      answers={answers}
                      questionID={questionID}
                    />
                  );
                }
              )}
            </div>
          )}
        </div>
      )}

      {!user && <div>You are not Logged out. </div>}
    </>
  );
};
