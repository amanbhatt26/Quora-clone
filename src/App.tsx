import { Navbar } from "./Components/Navbar";
import { Main } from "./Components/Main";
import { Login } from "./Modals/Login";
import { Qna } from "./Modals/Question";
import { Answer } from "./Modals/Answer";

export const App = () => {
  return (
    <div className="App h-[100vh] w-100vw flex flex-col">
      <Navbar />
      <Login />
      <Qna />
      <Answer />
      <Main />
    </div>
  );
};
