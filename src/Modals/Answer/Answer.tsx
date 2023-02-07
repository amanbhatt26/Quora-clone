import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  closeAnswerModal,
  submittingAnswer,
} from "../../Features/AnswerModal/AnswerModalSlice";
import { updateAnswers } from "../../Features/Question-Detail/QuestionDetailSlice";
import { addAnswer } from "../../Utils/addAnswer";
import { auth } from "../../Utils/firebase";

export const Answer = () => {
  const { questionId } = useSelector((state: any) => state.questionDetail);
  const { isOpen, isSubmitting } = useSelector(
    (state: any) => state.answerModal
  );
  const { question } = useSelector((state: any) => state.questionDetail);
  const dispatch = useDispatch();
  const [user, loading] = useAuthState(auth);
  const [text, setText] = useState("");
  return (
    isOpen && (
      <div className="fixed h-[100vh] w-[100vw] z-[100]">
        <div
          className="bg-white h-[25rem] w-[40rem] p-2 mx-auto my-auto left-[50%] translate-x-[-50%] mt-[10rem] fixed flex flex-col items-center shadow-md z-[100]"
          onClick={() => {}}
        >
          <p className="text-slate-600 mb-2 flex flex-row items-center justify-center text-[.8rem]">
            Write the Answer{" "}
          </p>
          <p className="text-[1.1rem] my-2 text-slate-800">{question.text} </p>
          <textarea
            className="outline-slate-400 border-2 w-full h-full text-slate-600 text-[.8rem] p-2 m-2 resize-none"
            placeholder="Write answer in no more than 250 words"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          {!isSubmitting ? (
            <button
              className="text-[.8rem] text-white bg-slate-600 p-2 rounded-[.4rem] m-2 hover:bg-slate-400"
              onClick={async () => {
                if (text === "") {
                  alert("Answer text cannot be empty!");
                  return;
                }
                dispatch(submittingAnswer(true));
                const response = await addAnswer(
                  text,
                  user,
                  questionId as string
                );
                if (!response.success) {
                  alert("cannot submit answer due to server error");
                  console.log(response, questionId);
                } else if (response.success === true) {
                  dispatch(
                    updateAnswers({
                      text: text,
                      user: user?.displayName,
                      questionId: questionId,
                    })
                  );
                }

                setText("");
                dispatch(closeAnswerModal());
                dispatch(submittingAnswer(false));
              }}
            >
              Submit
            </button>
          ) : (
            <button className="text-[.8rem] text-white bg-slate-600 p-2 rounded-[.4rem] m-2 hover:bg-slate-400">
              ...
            </button>
          )}
        </div>
        <div
          className=" bg-[rgba(0,0,0,0.75)] z-[10] w-full h-full fixed top-0 left-0"
          onClick={() => {
            dispatch(closeAnswerModal());
          }}
        ></div>
      </div>
    )
  );
};
