import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";

export const GoogleLogin = async (googleAuthProvider: GoogleAuthProvider) => {
  try {
    const result = await signInWithPopup(auth, googleAuthProvider);
  } catch (error) {
    console.log(error);
  }
};

export const Logout = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.log(error);
  }
};
