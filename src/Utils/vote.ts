export type voteType = {
  like: boolean;
  dislike: boolean;
  userId: string;
  answerId: string;
};
export const vote = async ({ like, dislike, userId, answerId }: voteType) => {
  const body = {
    like: like,
    dislike: dislike,
    userId: userId,
    answerId: answerId,
  };
  return fetch(process.env.REACT_APP_INTERACT_ANSWERS_ENDPOINT as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
