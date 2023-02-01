export const Answer = ()=>{
    return <div className="h-auto bg-white shadow-lg m-[2rem] rounded-[1rem] flex flex-row">
        {/* upvote component */}
        <div className="w-[10%]  rounded-[1rem] flex flex-col items-center justify-top p-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" fill="#D6E4E5" strokeWidth="0"/>
        </svg>

            
        <p className="text-[0.90rem] text-slate-600">50</p>
            
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" fill="#EB6440" strokeWidth="0" />
        </svg>


        </div>
        {/* description component */}
        <div className="w-[90%] rounded-[1rem] p-[1.5rem] flex flex-col justify-top items-center">
            {/* Text elements */}
            <div className="border-b-2 pb-8">
                {/* Question */}
                <p className="text-[1rem] mb-2">Laborum laborum quis irure sunt ipsum consectetur nulla culpa pariatur et.?</p>        
                {/* Answer */}
                <p className="text-[0.8rem] text-slate-600">Excepteur aliqua ipsum dolore et aute ut dolor.
                    Sunt irure incididunt sit do nostrud. Commodo mollit <br/>
                    Nisi Lorem veniam officia incididunt eiusmod sint culpa laborum cillum officia et id voluptate elit. Enim consectetur id amet exercitation id dolor reprehenderit veniam do occaecat eu elit. Eiusmod tempor duis officia anim eu ipsum laboris reprehenderit id eiusmod minim sunt esse. Commodo nulla ipsum excepteur minim labore cillum laborum. Consectetur aliqua ad sint adipisicing tempor aliquip. Duis elit cillum eiusmod ipsum aliqua nulla dolor. Ullamco minim duis id exercitation consectetur..</p>
            </div>
            {/* Description element */}

            <div className="mt-5 h-[3rem] flex flex-row items-center w-full">
                <img src="https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-spiderman_3a64e546.jpeg?region=0%2C0%2C300%2C300" className="h-[2rem] w-[2rem] rounded-[50%]"/>
                <p className="mx-2 text-[0.75rem] text-[#497174]"> Aman</p>
                
                <p className="right text-[0.75rem] justify-self-end text-[#666666]"> 2hr ago</p>
                {/* number of comments */}
                <div className="flex flex-row items-center ml-auto text-[0.75rem]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}className="w-6 h-6 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" fill="#C7BCA1"/>
  
                </svg>
                <p className="mr-[1rem] md:mr-[2rem] text-[.75rem] text-[#666666] self-start">60+</p>
                </div>

            </div>
            
        </div>
    </div>  
}