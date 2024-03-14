
import React, { useState } from "react";
import skillData from "./SkillData";

const Skillsection = () => {
    const [items, setItems] = useState(skillData);

    return (
        <div className="w-full h-auto  p-10">
            <div className="max-w-[1280px] h-screen mx-auto md:flex  flex flex-col text-white justify-center items-center    gap-20">
                <div className="text-3xl text-center ">
                    <h1 className="pb-2">Skills</h1>
                    <div className=" border-t-2 border-violet-800  w-64 p-2">
                    <p></p>

                    </div>
                    {/* <p>Take a look into this</p> */}
                </div>
                <div className="grid grid-cols-2  mt-2 md:grid-cols-4 gap-10 ">
                    {items.map((data) => (
                        <div key={data.id} className="flex flex-col  rounded-xl p-2  border-slate-500 justify-center items-center">
                            <img className="w-12 h-12" src={data.images} alt="" />
                            <p className="text-center pt-3">{data.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skillsection;
// --------------->>>>>>>>>>>>>>>>
// import { useState } from "react"
// import skillData from "./SkillData"
// const Skillsection = () => {
//     const [item, setItem] = useState(skillData)
//     return (
//         <div className="w-full h-auto pt-6  bg-[#0a192f]">
//             <div className="max-w-[1000px]  h-screen mx-auto ">
//                 <div className="mb-4  items-center md:mb-8 lg:flex-row lg:justify-between">
//                     <h1 className="text-center text-white text-4xl pt-3 ">Skills
//                     </h1>

//                 </div>
//                 <div className="grid grid-cols-3 rounded-lg md:grid-cols-3 lg:gap-6">
//                     {
//                         item.map((data, i) => {
//                             return <div key={i} className="flex h-16 items-center justify-center rounded-lg  text-gray-400 sm:h-32">
//                                 <div >
//                                     <img className="w-12 h-12" src={data.images} alt="" />
//                                 </div>
//                             </div>
//                         })
//                     }

//                 </div>

//             </div>
//         </div>

//     )
// }
// export default Skillsection
