import { Answer } from "../Answer"
import { TopUsers } from "../TopUsers"

export const Home = ()=>{
    return <>
        {/* scrollable list component */}
        <div className="scrollable-list h-full w-[100vw] md:w-[70vw] ml-10"> 
            

            {/* Answer Components */}
                

            <Answer/>
            <Answer/>
            <Answer/> 
            <Answer/>
            <Answer/>
            <Answer/>


        </div>
        {/* Top users component */}
        <div className=" flex-1 flex flex-col h-full invisible md:visible">
            <TopUsers/>
        </div>
    </>
}