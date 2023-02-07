import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  closeQnaModal,
  submittingQna,
} from "../../Features/QnaModal/QnaModalSlice";
import { addQuestion } from "../../Utils/addQuestion";
import { auth } from "../../Utils/firebase";

export const Qna = () => {
  const { isOpen, isSubmitting } = useSelector((state: any) => state.qnaModal);
  const dispatch = useDispatch();
  const [user, loading] = useAuthState(auth);
  const [text, setText] = useState("");
  return (
    isOpen && (
      <div className="fixed h-[100vh] w-[100vw] z-[100]">
        <div
          className="bg-white h-[15rem] w-[40rem] p-2 mx-auto my-auto left-[50%] translate-x-[-50%] mt-[10rem] fixed flex flex-col items-center shadow-md z-[100]"
          onClick={() => {}}
        >
          <p className="text-slate-600 mb-2 flex flex-row items-center justify-center">
            Ask a Question{" "}
          </p>
          <textarea
            className="outline-slate-400 border-2 w-full h-full text-slate-600 text-[.8rem] p-2 m-2 resize-none"
            placeholder="Write question statement in no more than 50 words"
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
                  alert("Question text cannot be empty!");
                  return;
                }
                // console.log(text); // post the question to the backend
                dispatch(submittingQna({ payload: true }));
                const status = await addQuestion(text, user);
                console.log(status);
                if (!status?.success) {
                  alert("Cannot post the question due to server errors");
                }
                dispatch(closeQnaModal());
                dispatch(submittingQna({ payload: false }));
                setText("");
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
            dispatch(closeQnaModal());
          }}
        ></div>
      </div>
    )
  );
};
