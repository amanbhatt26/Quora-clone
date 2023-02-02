import { Answer } from "../Answer"

export const User = ()=>{
    return <div className="flex-1 h-full flex flex-col items-center text-slate-600">
        <div className="bg-white h-min w-[50vw] mt-10 rounded-[0.4rem] flex flex-col justify-start items-center">
            <div className="flex flex-row border-b-2 w-full p-2">
            <div className="p-2 m-2">
                <img src="https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-spiderman_3a64e546.jpeg?region=0%2C0%2C300%2C300" className="h-[10rem] w-[10rem] rounded-[50%]"/>
            </div>
            <div className="flex flex-col items-start mt-10">
                <p className="text-[2rem] text-slate-600">Aman Bhatt</p>
                <p>Web Developer</p>
            </div>
            </div>
            <div className="flex flex-row justify-around w-full">
                <div className="m-2 p-2 hover:border-b-[0.5rem]">Questions</div>
                <div className="m-2 p-2 hover:border-b-[0.5rem] border-b-[0.5rem]">Answers</div>
               
            </div>
        </div>

        <div className="scrollable-list h-full w-[50vw]"> 
            

            {/* Answer Components */}
                

            <Answer votes={50} question={"Officia deserunt proident in est culpa ullamco magna officia enim non nostrud."} answer="Enim eu id enim esse dolore anim Lorem aliquip commodo dolor ea magna occaecat esse. Qui aliquip in mollit sit consectetur consequat. Ut adipisicing consectetur est dolore sint proident do est qui officia." username="Aman" postedAt="2hr ago" comments="60+" questionID="questionID"/>
            <Answer votes={50} question={"Officia deserunt proident in est culpa ullamco magna officia enim non nostrud."} answer="Enim eu id enim esse dolore anim Lorem aliquip commodo dolor ea magna occaecat esse. Qui aliquip in mollit sit consectetur consequat. Ut adipisicing consectetur est dolore sint proident do est qui officia." username="Aman" postedAt="2hr ago" comments="60+" questionID="questionID"/>
            <Answer votes={50} question={"Officia deserunt proident in est culpa ullamco magna officia enim non nostrud."} answer="Enim eu id enim esse dolore anim Lorem aliquip commodo dolor ea magna occaecat esse. Qui aliquip in mollit sit consectetur consequat. Ut adipisicing consectetur est dolore sint proident do est qui officia." username="Aman" postedAt="2hr ago" comments="60+" questionID="questionID"/>
            <Answer votes={50} question={"Officia deserunt proident in est culpa ullamco magna officia enim non nostrud."} answer="Enim eu id enim esse dolore anim Lorem aliquip commodo dolor ea magna occaecat esse. Qui aliquip in mollit sit consectetur consequat. Ut adipisicing consectetur est dolore sint proident do est qui officia." username="Aman" postedAt="2hr ago" comments="60+" questionID="questionID"/>



        </div>
        
    </div>
}