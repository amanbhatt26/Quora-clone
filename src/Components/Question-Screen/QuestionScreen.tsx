import { Question } from "../Question/Question"

export const QuestionScreen = ()=>{
    return <><div className="scrollable-list h-full w-[100vw] md:w-[70vw] ml-10"> 
            

    {/* Question Components */}
        
    <Question text="Laborum laborum quis irure sunt ipsum consectetur nulla culpa pariatur et.?" username="Aman" postedAt="2hr ago" answers="60+" questionID="questionID"/>
    <Question text="Laborum laborum quis irure sunt ipsum consectetur nulla culpa pariatur et.?" username="Aman" postedAt="2hr ago" answers="60+" questionID="questionID"/>
    <Question text="Laborum laborum quis irure sunt ipsum consectetur nulla culpa pariatur et.?" username="Aman" postedAt="2hr ago" answers="60+" questionID="questionID"/>
    <Question text="Laborum laborum quis irure sunt ipsum consectetur nulla culpa pariatur et.?" username="Aman" postedAt="2hr ago" answers="60+" questionID="questionID"/>
    <Question text="Laborum laborum quis irure sunt ipsum consectetur nulla culpa pariatur et.?" username="Aman" postedAt="2hr ago" answers="60+" questionID="questionID"/>
    <Question text="Laborum laborum quis irure sunt ipsum consectetur nulla culpa pariatur et.?" username="Aman" postedAt="2hr ago" answers="60+" questionID="questionID"/>
    <Question text="Laborum laborum quis irure sunt ipsum consectetur nulla culpa pariatur et.?" username="Aman" postedAt="2hr ago" answers="60+" questionID="questionID"/>
    <Question text="Laborum laborum quis irure sunt ipsum consectetur nulla culpa pariatur et.?" username="Aman" postedAt="2hr ago" answers="60+" questionID="questionID"/>



</div>
    {/* Add question button */}
    <button className="fixed bottom-0 right-0 m-5 flex flex-row items-center justify-center w-[3rem] h-[3rem] rounded-[50%]  bg-[#86A3B8] text-white text-[1.5rem] p-1 hover:bg-slate-600 shadow-xl"><p>+</p></button>
</>
}