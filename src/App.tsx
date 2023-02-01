import { Navbar } from "./Components/Navbar";
import { Main } from "./Components/Main";


export const  App = ()=>{
  return (
    <div className="App h-[100vh] w-100vw flex flex-col">
      <Navbar/>
      <Main/>
    </div>
  );
}


