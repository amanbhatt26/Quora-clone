import { useDispatch, useSelector } from "react-redux";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../Utils/firebase";
import { closeLoginModal } from "../../Features/LoginModal/LoginModalSlice";
import { close } from "inspector";
import { GoogleLogin } from "../../Utils/login";

export const Login = () => {
  const googleAuthProvider = new GoogleAuthProvider();
  const { isOpen } = useSelector((state: any) => state.loginModal);

  const dispatch = useDispatch();

  return (
    <>
      {isOpen && (
        <div className="fixed h-[100vh] w-[100vw] z-[100]">
          <div
            className="bg-white h-[10rem] w-[15rem] p-2 mx-auto my-auto left-[50%] translate-x-[-50%] mt-[10rem] fixed flex flex-col items-center shadow-md z-[100]"
            onClick={() => {}}
          >
            <p className="text-slate-600 mb-2 flex flex-row items-center justify-center">
              Login{" "}
            </p>
            <button
              className="flex flex-row items-center bg-slate-600 p-[1.5rem] rounded-[0.3rem] hover:bg-gray-800"
              onClick={() => {
                GoogleLogin(googleAuthProvider);
                dispatch(closeLoginModal());
              }}
            >
              {" "}
              <FcGoogle className="h-6 w-6 m-2" />{" "}
              <p className="text-white">Sign in / Login</p>{" "}
            </button>
          </div>
          <div
            className=" bg-[rgba(0,0,0,0.75)] z-[10] w-full h-full fixed top-0 left-0"
            onClick={() => {
              dispatch(closeLoginModal());
            }}
          ></div>
        </div>
      )}
    </>
  );
};
