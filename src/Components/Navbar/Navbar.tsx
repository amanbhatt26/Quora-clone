import { HomeIconOutline, HomeIconSolid, QuestionIconOutline } from "../Icons"

export const Navbar = ()=>{
    return <div className="fixed w-[100vw] h-[5rem] shadow-md 
    flex flex-row items-center p-[1rem] bg-[#FFFFFF] justify-start">
        <div className="mx-10 text-slate-800">
            LOGO
        </div>
        <div className="flex-1 flex flex-row justify-center mx-5 ">
        <input className="bg-[#EEF1FF] w-[30vw] h-[4vh] rounded pl-2  text-slate-800" placeholder={"Q search"}/>
        
        </div>
        <div className=" flex flex-row justify-end">
            <div className="mx-5 rounded-[0] p-1  hover:border-b-[0.5rem] border-b-[0.5rem]"> 
                <HomeIconSolid className="w-8 h-8"/>
            </div>
            <div className="mr-5 rounded-[0] p-1  hover:border-b-[0.5rem]">
                <QuestionIconOutline className="w-8 h-8"/>
            </div>
        </div>
        <div>
        <img src="https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-spiderman_3a64e546.jpeg?region=0%2C0%2C300%2C300" className="h-[2rem] w-[2rem] rounded-[50%] mr-8"/>
        </div>
        
    </div>
}