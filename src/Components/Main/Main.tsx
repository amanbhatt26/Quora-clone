import { Home } from "../Home-Screen"
import { Question } from "../Question"
import { QuestionDetail } from "../Question-detail-Screen"
import { QuestionScreen } from "../Question-Screen"
import { User } from "../User-Screen"


export const Main = ()=>{
    
    return <div className="Main flex-1 flex flex-row justify-center items-center mt-[5rem] bg-[#EEF1FF]">
        <QuestionDetail/>
    </div>
}