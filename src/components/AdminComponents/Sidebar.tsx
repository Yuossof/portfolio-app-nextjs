"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Settings, BriefcaseIcon, LightbulbIcon, ChevronRight } from 'lucide-react'

type Route = 'home' | 'projects' | 'skills'
interface Props {
    setCurrentRoute: React.Dispatch<React.SetStateAction<Route>>,
    currentRoute?: string
}

const Sidebar = ({ setCurrentRoute, currentRoute }: Props) => {
    const [width, setWidth] = useState("0")

    return (
        <>
            <aside
                className={`bg-white shadow-2xl fixed transition-all z-40 w-${width} h-48 flex justify-center items-center mt-20 rounded-xl flex-col gap-2`}
                style={{ direction: 'rtl' }}
            > 
                <div onClick={()=> setWidth(width === "0" ? "16" : "0")} className={`absolute top-5 hover:opacity-100  opacity-60 -right-11 cursor-pointer rounded-r-md border-r-2 border-gray-400 -z-1 p-2 bg-white`}>
                    <ChevronRight size={35}/>
                </div>
                <div onClick={() => setCurrentRoute('home')} className={`hover:bg-slate-100 ${width === "0" ? "hidden" : ""} w-11 h-11 rounded-full flex justify-center items-center ${currentRoute === "home" ? "bg-gray-800 hover:!bg-gray-700  text-white" : ""}`}>
                    <Settings size={30} />
                </div>
                <div
                    className={`hover:bg-slate-100 w-11 h-11 rounded-full flex justify-center ${width === "0" ? "hidden" : ""} items-center ${currentRoute === "projects" ? "bg-gray-800 hover:!bg-gray-700  text-white" : ""}`}
                    onClick={() => setCurrentRoute('projects')}
                >
                    <BriefcaseIcon size={30} />
                </div>
                <div
                    className={`hover:bg-slate-100 w-11 h-11 rounded-full flex justify-center ${width === "0" ? "hidden" : ""} items-center ${currentRoute === "skills" ? "bg-gray-800 hover:!bg-gray-700  text-white" : ""}`}
                    onClick={() => setCurrentRoute('skills')}
                >
                    <LightbulbIcon size={30} />
                </div>
            </aside>
        </>
    )
}

export default Sidebar

