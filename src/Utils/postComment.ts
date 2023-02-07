export const postComments = async (
  text: string,
  userId: string,
  answerId: string
) => {
  const body = {
    userId: userId,
    text: text,
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
    .catch((error) => console.log(error));
};
