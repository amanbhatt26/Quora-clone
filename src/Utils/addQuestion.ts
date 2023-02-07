import { User } from "firebase/auth";

export const addQuestion = async (
  text: string,
  user: User | null | undefined
) => {
  console.log(text);
  if (!user) return;
  const body = {
    text: text,
    userId: user.displayName,
  };

  return fetch(process.env.REACT_APP_POST_QUESTION_ENDPOINT as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
