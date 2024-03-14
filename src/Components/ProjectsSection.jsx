
import { useState } from "react"
import ProjectData from "./ProjectData"

import ParticlesBg from "./Particles"
// import images from "../assets/CryptoCurrency.png"
const ProjectsSection = () => {
    const [Data, setData] = useState(ProjectData)
    return (
<>
<ParticlesBg/>
        <div className="w-full h-auto p-10  bg-slate-950  ">
            <div className="max-w-[1000px]  h-auto mx-auto grid md:grid-cols-3 lg:grid-cols-3 gap-3 ">
                {
                    Data.map((data, idx) => {
                        return <div key={idx} className=" box shadow-2xl   hover:scale-105 duration-300  rounded-lg border-2  border-slate-700   " >
                            <div>

                                <img className="w-full object-cover p-2" src={data.images} alt="" />
                            </div>

                            <div className=" text-yellow-400  text-center text-[20px] font-semibold p-2 ">
                                <h1>{data.Name}</h1>
                            </div>

                            <div className="p-3  text-black text-white">
                                <p>{data.Description}</p>

                            </div>
                            <div className="p-4 flex justify-center items-center">
                                <a className=' outline-none bg-slate-950 border border-slate-400 rounded-md px-4 py-2  text-white ' href={data.link}>
                                    Visit Here</a>
                            </div>

                        </div>
                    })
                }

            </div>
        </div>
</>
    )
}


// <div className="w-full h-screen bg-slate-600 text-white pt-10">
//     <div className="max-w-[1280px] flex md:flex-wrap md:justify-between mx-auto  gap-10 justify-evenly ">
//         {
//             Data.map((data, idx) => {
//                 return <div key={idx} className=" border-2 border-grey-900 text-center flex-col p-4"> 
//                 <img  className="w-[300px] h-[200px]" src={images} alt="null"/>
//                 <p>{data.Name}</p>
//                 <p className=" w-[300px]">{data.Description}</p>

//                 </div>
//             })
//         }

//     </div>


// </div>




export default ProjectsSection  
    {/* <div className=" max-w-[1280px] mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-6 b">
                {
                    Data.map((data, idx) => {


                        return <div key={idx} className=" border-2 border-slate-900 relative group overflow-hidden rounded-lg ">


                            <div className="rounded-lg overflow-hidden group-hover:opacity-75">
                            <img alt="" className="w-full aspect-[16/9]" height={225} src={data.images} width={300} />
                            </div>
                            <div className="bg-paper-100 dark:bg-paper-800 p-4 grid gap-2">
                                <h3 className="text-lg font-bold">{data.Name}</h3>
                                <p className="text-sm/relaxed line-clamp-3 mb-10">
                                    {
                                        data.Description
                                    }
                                </p>
                            </div>

                            
                            </div>
                        })
                    } */}
            {/* </div> */}
        