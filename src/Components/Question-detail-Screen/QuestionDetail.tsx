import { WithoutQuestion } from "../Answer/WithoutQuestion"
import { Question } from "../Question/Question"

export const QuestionDetail = ()=>{
    return  <><div className="scrollable-list h-full w-[100vw] md:w-[70vw] ml-10"> 
            
    {/* Question */}

    <Question text="Laborum laborum quis irure sunt ipsum consectetur nulla culpa pariatur et.?" username="Aman" postedAt="2hr ago" answers="60+"/>
    {/* Answers for the question */}
        
    <WithoutQuestion votes={50} postedAt="2hr ago" comments="60+" username="Aman" answer="Proident consectetur magna mollit mollit anim reprehenderit labore culpa enim fugiat ex aliquip ipsum eiusmod. Commodo proident et occaecat tempor non ullamco consequat. Do cupidatat culpa nostrud id nulla. Pariatur adipisicing qui sunt duis ex ut pariatur ex cupidatat. Sit nostrud minim reprehenderit adipisicing culpa laboris anim fugiat exercitation aute sit Lorem sint."/>


</div>
    {/* Add question button */}
    <button className="fixed bottom-0 right-0 m-5 flex flex-row items-center justify-center w-[3rem] h-[3rem] rounded-[50%]  bg-[#86A3B8] text-white text-[1.5rem] p-1 hover:bg-slate-600 shadow-xl"><p>+</p></button>
</>
}