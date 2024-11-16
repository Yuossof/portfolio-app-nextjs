"use client"
import React from 'react'
import { Button } from '../ui/button'
import { HomeIcon, BriefcaseIcon, LightbulbIcon } from 'lucide-react'
import Link from 'next/link'
interface Props {
    setCurrentRoute?: any,
    currentRoute?: any
}
const Sidebar = ({setCurrentRoute, currentRoute}: Props) => {
    return (
        <aside className="w-64 bg-white shadow-md">
            <nav className="p-5 space-y-2">

                <Button className="w-full justify-start"
                    variant="ghost"
                >
                    <Link
                        className='flex items-center'
                        href="/"
                    >
                        <HomeIcon className="mr-2 h-4 w-4" />
                        Home Page
                    </Link>
                </Button>

                <Button
                    variant={currentRoute === 'home' ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setCurrentRoute('home')}
                >
                    <HomeIcon className="mr-2 h-4 w-4" />
                    Home
                </Button>

                <Button
                    variant={currentRoute === 'projects' ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setCurrentRoute('projects')}
                >
                    <BriefcaseIcon className="mr-2 h-4 w-4" />
                    Projects
                </Button>
                <Button
                    variant={currentRoute === 'skills' ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setCurrentRoute('skills')}
                >
                    <LightbulbIcon className="mr-2 h-4 w-4" />
                    Skills
                </Button>
            </nav>
        </aside>
    )
}

export default Sidebar