import { User } from "firebase/auth";

export const addAnswer = async (
  text: string,
  user: User | null | undefined,
  questionId: string
) => {
  console.log(text);
  if (!user) return;
  const body = {
    text: text,
    userId: user.displayName,
    questionId: questionId,
  };

  return fetch(process.env.REACT_APP_POST_ANSWER_ENDPOINT as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
